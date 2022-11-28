from whoosh.fields import Schema, TEXT, STORED, ID
from whoosh.analysis import StemmingAnalyzer

schema = Schema(
                page_content=TEXT(analyzer=StemmingAnalyzer()),
                page_title=TEXT(stored=True),
                page_url=ID(stored=True),
                book_title=TEXT(stored=True),
                book_author=TEXT(stored=True),
                book_isbn10=TEXT(stored=True),
                book_isbn13=TEXT(stored=True),
                book_cover=STORED
                )