import "./SearchResult.css";

function SearchResult(props) {
  const page_title = props.page_title;
  const page_link = props.page_link;
  const page_context = props.page_context;

  return (
    <div className="search-result">
        <p className="page-link">{page_link}</p>
        <a className="page-title" href={page_link} target='_blank'>{page_title}</a>
        <p className="page-context">{page_context}</p>
        <button className="page-more-btn">[ + More ]</button>
    </div>
  );
}

export default SearchResult;