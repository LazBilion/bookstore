import React from "react";

import BookCard from "Components/Book-Card";
import classes from "./book-details-page.module.css";
import BookInfo from "Components/Book-Info";
import { getBook, getOtherBooks } from "API/data";
import { transformBook } from "Helpers";

function BookDetailsPage({ match }) {
  const isbn = match.params.isbn;
  const book = getBook(isbn);
  const transformedBook = book && transformBook(book);

  return transformedBook ? (
    <div className={classes.bookDetailsPage}>
      <div className={classes.detailsContainer}>
        <BookCard book={transformedBook} showAuthor showRating large />
        <div className={classes.bookDetails}>
          <BookInfo book={transformedBook} />
        </div>
      </div>
      <div className={classes.bookSuggestionList}>
        <h2>Other books you may like...</h2>
        <div className={classes.bookSuggestions}>
          {getOtherBooks(isbn).map(book => {
            return <BookCard key={book.title} book={book} showTitle />;
          })}
        </div>
      </div>
    </div>
  ) : (
    <div>Book not found</div>
  );
}

export default BookDetailsPage;
