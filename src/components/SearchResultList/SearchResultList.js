import SearchResult from "./SearchResult";
import './SearchResultList.css';

function SearchResultList(props) {

  const searchResults = props.searchResults.map((result) => (
    <SearchResult
      key={result.page_id}
      page_title={result.page_title}
      page_link={result.page_link}
      page_context={result.page_context}
    ></SearchResult>
  ));

  return <div className="search-result-list">{searchResults}</div>;
}

export default SearchResultList;
