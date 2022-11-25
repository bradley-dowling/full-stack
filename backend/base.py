import json
from flask import Flask
from whoosh_index import *

api = Flask(__name__)
whoosh_idx = WhooshIndex('index')

@api.route('/hello')
def hello():
    response_body = {
        "msg": "Hello, World!"
    }

    return response_body

@api.route('/search/<query>/<page_number>')
def search(query=None, page_number=None):
    # results, total_pages = whoosh_idx.search_index(query, page_number)
    total_pages = 10
    dummy_results = json.load(open("data/dummy.json"))
    
    response_body = {
        "results": dummy_results,
        "page_count": total_pages,
        "current_page": page_number,
        "query": query
    }

    return response_body