import { useState } from "react";
import Card from "../Card/Card";
import "./SearchResult.css";

function SearchResult(props) {

  const [moreState, setMoreState] = useState(false);

  const moreBtnClickHandler = () => {
    setMoreState(!moreState);
  }

  const page_title = props.page_title;
  const page_link = props.page_link;
  const page_context = props.page_context;
  const bookInfo = props.page_book_info;

  let moreBtn;

  if (bookInfo) {
    if (moreState) {
      moreBtn = <button className="page-more-btn" onClick={moreBtnClickHandler}>[ - Less ]</button>
    } else {
      moreBtn = <button className="page-more-btn" onClick={moreBtnClickHandler}>[ + More ]</button>
    }
  }

  return (
    <div className="search-result">
        <p className="page-link">{page_link}</p>
        <a className="page-title" href={page_link} target='_blank'>{page_title}</a>
        <p className="page-context">{page_context}</p>
        {moreState ? <Card bookInfo={bookInfo}></Card> : <></>}
        {bookInfo ? moreBtn : <></>}
    </div>
  );
}

export default SearchResult;