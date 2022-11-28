import os, os.path
import json
from whoosh import index
from whoosh_schema import *

ix = index.create_in("index", schema)
writer = ix.writer()

for filename in os.listdir("raw"):
    with open(f"raw/{filename}") as f:
        data = json.load(f)
        writer.add_document(page_title=data['Title'].strip(),
                            page_url=data['Page URL'].strip(),
                            page_content=data['raw_text'].strip(),
                            page_rank=float(data["page_rank"]),
                            book_title=data['Title'].strip(),
                            book_author=data['Author'].strip(),
                            book_isbn10=data['ISBN10'].strip(),
                            book_isbn13=data['ISBN13'].strip(),
                            book_cover=data['Cover Page'])

writer.commit()