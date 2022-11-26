import './Card.css';

function Card(props) {
    let bookCover = props.bookInfo.bookCover;
    let bookTitle = props.bookInfo.bookTitle;
    let bookAuthor = props.bookInfo.bookAuthor;
    let bookISBN = props.bookInfo.bookISBN;

    return (
        <div className="card">
            <img className="book-cover" src={bookCover}/>
            <div className="book-info-container">
                <p className="book-title">{bookTitle}</p>
                <p className="book-author">By: {bookAuthor}</p>
                <p className="book-isbn">ISBN: {bookISBN}</p>
            </div>
        </div>
    );
}

export default Card;