from flask import Flask

api = Flask(__name__)

@api.route('/hello')
def hello():
    response_body = {
        "msg": "Hello, World!"
    }

    return response_body