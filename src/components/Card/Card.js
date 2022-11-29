import './Card.css';
import { useState } from 'react';

function Card(props) {
    let bookCover = props.bookInfo.bookCover;
    let bookTitle = props.bookInfo.bookTitle;
    let bookAuthor = props.bookInfo.bookAuthor;
    let bookISBN = props.bookInfo.bookISBN;

    let related = <></>;

    if (props.authorData) {
        console.log(props.authorData)   
    }

    return (
        <div className="card">
            <img className="book-cover" src={bookCover} alt="Image not found"/>
            <div className="book-info-container">
                <p className="book-title">{bookTitle}</p>
                <p className="book-author">By: {bookAuthor}</p>
                <p className="book-isbn">ISBN: {bookISBN}</p>
                {related}
            </div>
        </div>
    );
}

export default Card;