import SearchResult from "../SearchResult/SearchResult";
import './SearchResultList.css';

function SearchResultList(props) {

  const searchResults = props.searchData.results.data.map((result) => (
    <SearchResult
      key={result.book_isbn13}
      page_title={result.page_title}
      page_link={result.page_url}
      page_context={result.page_context}
      page_book_info={{
        bookCover: result.book_cover,
        bookAuthor: result.book_author,
        bookTitle: result.page_title,
        bookISBN: result.book_isbn13
      }}
    ></SearchResult>
  ));

  return <div className="search-result-list">{searchResults}</div>;
}

export default SearchResultList;
