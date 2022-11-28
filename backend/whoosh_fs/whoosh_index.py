from whoosh import index
from whoosh.qparser import QueryParser

DEFAULT_PAGELENGTH = 10

class WhooshIndex:
    def __init__(self, index_dir):
        self.index_dir = index_dir
    
    def search_index(self, query_string, page_num):
        ix = index.open_dir(self.index_dir)
        with ix.searcher() as searcher:
            qp = QueryParser("page_content", schema=ix.schema)
            q = qp.parse(query_string)
            results = searcher.search_page(q, page_num)
            results_len = len(results)
            total_pages = int(results_len / DEFAULT_PAGELENGTH) + 1
            results_dict = {"data": [dict(hit) for hit in results]}

        return results_dict, total_pages