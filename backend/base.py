from flask import Flask

api = Flask(__name__)

@api.route('/hello')
def hello():
    response_body = {
        "msg": "Hello, World!"
    }

    return response_body

@api.route('/search/<query>/<page_number>')
def search(query=None, page_number=None):
    
    response_body = {
        "results": [
            {
                "page_id": 1,
                "page_title": 'Hello World',
                "page_link": 'http://example.com',
                "page_context": '...this is a hello world test...'
            },
            {
                "page_id": 2,
                "page_title": 'Hello World',
                "page_link": 'http://example.com',
                "page_context": '...this is a hello world test...'
            },
            {
                "page_id": 3,
                "page_title": 'Hello World',
                "page_link": 'http://example.com',
                "page_context": '...this is a hello world test...'
            },
            {
                "page_id": 4,
                "page_title": 'Hello World',
                "page_link": 'http://example.com',
                "page_context": '...this is a hello world test...'
            }
        ],
        "page_count": 10,
        "current_page": page_number,
        "query": query
    }

    return response_body