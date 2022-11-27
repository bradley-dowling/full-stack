from whoosh.fields import Schema, TEXT, STORED
from whoosh.analysis import StemmingAnalyzer

schema = Schema(
                page_content=TEXT(analyzer=StemmingAnalyzer()),
                page_title=TEXT(stored=True),
                page_url=STORED,
                book_title=TEXT(stored=True),
                book_author=TEXT(stored=True),
                book_ISBN10=TEXT(stored=True),
                book_ISBN13=TEXT(stored=True),
                book_cover=STORED
                )