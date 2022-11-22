from flask import Flask

api = Flask(__name__)

@api.route('/hello')
def my_profile():
    response_body = {
        "msg": "Hello, World!"
    }

    return response_body