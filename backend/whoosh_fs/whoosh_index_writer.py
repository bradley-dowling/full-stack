import os, os.path
from whoosh import index

print(os.getcwd())

if not os.path.exists("index/"):
    print("index doesn't exist")
else:
    print("index exists")