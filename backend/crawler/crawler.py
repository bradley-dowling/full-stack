
import requests
from bs4 import BeautifulSoup
import time
import os
import pandas
import numpy
from urllib.parse import urlparse
import urllib.robotparser
import csv
import lxml 
import pickle
import re
import json


que = ['https://www.powells.com/browse-book-genres']	#Que is populated initially with whatever our starting point is. 
linkDict = {}	#linkDict has urls and whatever their links are.
visited = set()		#visited and scraped will hold visited pages and scraped pages respectively.
scraped = set()
BASE_DOMAIN = 'powells.com'		#contains whatever base domain we want to remain in.

#This has the keywords in links we don't want to pursue because they are not relevant.
noVisit = {
	'CreateAccount': '1',
	"login?returnurl=%2fmyaccount": '2',
	'Login': '3',
	'partner-program': '4',
	'&oldid=': '5',
	'gifts': '6',
	'sell-books': '7',
	'blog': '8',
	'events-update': '9',
	'locations': '10',
	'info': '11'
}

#=================================================================================================
#=================================================================================================


# This function is where all the scraping work is being done. The page is
# requested and the text data we need from the page is stored and parsed.
# Here we collect all the info we need from book pages and sent to to the 
# function where it is written to their files as part of our database. 
# the function also has measures to make sure the pages we are looking at
# are valid and will not crash our crawler while it is in progress. These
# countermeasures are designed to handle invalid page URL's and pages that
# may have encountered an error of some sort.

def getPage(url, pageCount):
	print("Current URL: " + que[0])
	visited.add(url)

	time.sleep(1)
	
	# ensure the link has no forbidden keywords to avoid bad paths
	if vetUrl(url) == False:
		print('---- NAH ---')
		que.pop(0)
		return(0)

	# Handle failed requests properly. And include a timeout.
	try:
		page = requests.get(url, timeout=5)		
	except requests.exceptions.RequestException as e:
		print('ERROR: could not get link')
		que.pop(0)
		return(0)

	if page.status_code != 200:
		print(f'bad status code: {page.status_code}')
		que.pop(0)
		return(0)


	# We get the page in XML format
	rawPage = page.text 
	bs = BeautifulSoup(rawPage, 'lxml')

	if "text/html" in page.headers.get("content-type", ''):
		try:
			#initialize all info we need and get it from the page 

			bookTitle = bs.find('h1', class_ = 'book-title').get_text(' ')

			pageAuthor = bs.find('a', target = '_parent').get_text(' ')

			ISBN = bs.find('p', class_ = 'tinytext').get_text(' ')

			# Looking for the book cover images on the page 
			image_list = []
			if bs.find(class_='coverLeft').find_all('img') is not None:
				linksList = bs.find(class_='coverLeft').find_all('img')
				for imgSrc in linksList:
					image_list.append(imgSrc.get('src'))

			raw = bs.get_text(" ", strip=True)

			# Now we pass all the data to the write function to write into the file
			writePage(bookTitle, pageAuthor, ISBN, url, image_list, raw)
			
		except:
			print('Not book Page')
		scraped.add(url)
	else:
		que.pop(0)
		return(0)

	linkDict[url] = []	# we add the url to our link dictionary
	
	linksList = bs.find_all('a')	# this will store all the links going out from the current page
	

	# We only save links containing our base domain
	for link in linksList:	
		urlStr = link.get('href')	
		if BASE_DOMAIN in str(urlStr):
			linkDict[url].append(urlStr)
			if urlStr not in visited and urlStr not in que:
				que.append(urlStr)

	que.pop(0)
	return(1) 


#=================================================================================================
#=================================================================================================

#make sure the url doesn't have forbidden keywords in it
def vetUrl(link):
	nodes = [i for x, i in noVisit.items() if x in link]
	if not nodes:
		return(True)
	else: 
		return(False)

#=================================================================================================
#=================================================================================================


# This function will write all the data we scraped to a JSON file which makes it 
# easy to parse and use for PageRank.
def writePage(title, Author, ISBN, url, image_list, raw):

	new_raw = re.sub(r'[^\w\s]', '', raw) #remove non-alphanumeric characters

	#create dictionary to dump into JSON file
	book_info = {
		"Title": title,
		"Author": Author,
		"Cover Page": image_list[0],
		"ISBN10": ISBN[37:50],
		"ISBN13": ISBN[11:24],
		"Page URL": url,
		"raw_text": new_raw
	}

	#create json file named with the unique ISBN number.
	with open(f'files/{ISBN[11:24]}.json', "w") as outfile:
		json.dump(book_info, outfile)

	# with open(f'files/{ISBN[11:24]}.txt' ,'w') as f:
	# 	f.write(f'Page Link: {url}\n\n')
	# 	f.write(f'Book Title: {title}\n\n') 
	# 	f.write(f'Book Author: {Author}\n\n')
	# 	f.write(f'ISBN Info: \n{ISBN[2:50]}\n')
	# 	f.write(f'Book Cover Page: {image_list[0]}\n\n')
	# 	f.write(f'Page raw text:\n {raw}\n\n')

	# 	f.close()

#=================================================================================================
#=================================================================================================


# This function converts the dictionary to an adjacency matrix then write it to csv file.
# To build our adjacency matrix, first we remove links in key items that are not in our scraped set.
def createMatrix():
	for i in linkDict:
		linkDict[i] = set(linkDict[i]).intersection(scraped)
		if not linkDict[i]:
			linkDict[i] = [i]

	with open('linkDictionary.pickle', 'wb') as handle:
		pickle.dump(linkDict, handle, protocol=-1)

	with open('myque.pickle', 'wb') as h:
		pickle.dump(que, h, protocol=-1)

	with open('visit.pickle', 'wb') as h:
		pickle.dump(visited, h, protocol=-1)

	with open('scraped.pickle', 'wb') as h:
		pickle.dump(scraped, h, protocol=-1)

	linkSets = [(j,k) for j , i in linkDict.items() for k in i]

	df = pandas.DataFrame(linkSets)

	matrix = pandas.crosstab(df[0], df[1])

	# Finally we write the adjacency matrix to our csv 
	matrix.to_csv('matrix.csv')


#=================================================================================================
#=================================================================================================


# Function to look at the robots file and make sure we can get data from this page URL
def checkLink(url):
	rp = urllib.robotparser.RobotFileParser()
	domain = urlparse(url).netloc

	rp.set_url(f'{urlparse(url).scheme}://{urlparse(url).netloc}/robots.txt')

	try:
		rp.read()
	except:
		print('ERROR: Unable to read ROBOTS.txt')
		return(0)
		
	if rp.can_fetch('*', url) == True:
		return(1)
	else:
		print("ERROR: Page Restricted")
		return(0)


#=================================================================================================
#=================================================================================================

def main():
	maxPages = input("How many pages to Scrape: ")	
	try:
		int(maxPages)
	except:
		print('Invalid, Default Set to 5000')
		maxPages = 30000 

	# first check if a directory is already there for all our files
	if not os.path.isdir('files'):
		os.makedirs('files')

	#initilize page count
	pageCount = 0

	# While que is not empty get the pages
	while que:
		if len(scraped) < int(maxPages):
			if que[0] not in visited:
				pageCount += getPage(que[0], pageCount)
				time.sleep(3)
			else:
				
				que.pop(0)
		else:
			print('scraped them all')
			break

	createMatrix()
	print(f'Pages Scraped: {pageCount}')



if __name__ == '__main__':
	main()