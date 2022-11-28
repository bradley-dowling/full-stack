import json
import csv

page_dict = {}
CAP = 6456

with open("matrix_reloaded.csv", "r") as f:
    page_reader = csv.reader(f, delimiter=',')
    pages = []
    page_reader.__next__()
    
    for row in page_reader:
        outgoing = []
        for link_index, link in enumerate(row[1:CAP]):
            if int(link) > 0:
                outgoing.append(link_index)

        pages.append((row[0], outgoing))
    
    # set initial rank and outgoing links for each page
    for page in pages:
        page_dict.update({page[0]: {"rank": 1 / len(pages),"prev_rank": 1 / len(pages), "outgoing_links": page[1], "incoming_links": []}})
    
    # set the incoming links and outgoing links for each page
    for page_index, page in enumerate(page_dict):
        for outgoing_link_index in page_dict[page]["outgoing_links"]:
            try:
                page_dict[pages[outgoing_link_index][0]]["incoming_links"].append(page_index)
            except IndexError:
                print(f"IndexError: {outgoing_link_index}")
    

with open("pageranks.json", "w") as f:
    json.dump(page_dict, f, indent=4)