import json
from flask import Flask
from whoosh_fs.whoosh_index import *

api = Flask(__name__)
whoosh_idx = WhooshIndex('whoosh_fs/index')

@api.route('/hello')
def hello():
    response_body = {
        "msg": "Hello, World!"
    }

    return response_body

@api.route('/search/<query>/<page_number>')
def search(query=None, page_number=1):
    page_number = int(page_number)
    results, total_pages = whoosh_idx.search_index(query, page_number)
    # total_pages = 21
    # results = json.load(open("dummy.json"))
    
    response_body = {
        "results": results,
        "page_count": total_pages,
        "current_page": page_number,
        "query": query
    }

    return response_body

@api.route('/get_author/<author>')
def get_authors(author=None):
    author_data = None
    this_author = None
    with open("authors.json", "r") as f:
        author_data = json.load(f)
        related_works = author_data.get(author)
    
    response_body = {
        "author": author,
        "related_works": related_works
    }

    return response_body
