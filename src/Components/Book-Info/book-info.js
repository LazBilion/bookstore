import React from "react";
import classes from "./book-info.module.css";

function BookInfo({ book }) {
  return (
    <div className={classes.bookInfo}>
      <h2 className={classes.title}>{book.title}</h2>
      <p>{book.description}</p>
      <button className={classes.shareBook}>Favorite</button>
      <button className={classes.shareBook}>Share</button>
      <ul className={classes.bookSpecs}>
        <li>Categogy: {book.categories.join(", ")}</li>
        <li>Year: {book.year}</li>
        <li>Number of Pages: {book.pages}</li>
        <li className={classes.publisher}>Publisher: {book.publisher}</li>
        <li>ISBN-10: {book.isbn.slice(3)}</li>
        <li>ISBN-13: {book.isbn}</li>
      </ul>
      <button className={`${classes.shareBook} ${classes.buyButton}`}>
        BUY
      </button>
    </div>
  );
}

export default BookInfo;
