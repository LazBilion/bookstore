import React from "react";
import BookCard from "Components/Book-Card";
import classes from "./book-details-page.module.css";
import BookInfo from "Components/Book-Info";

function BookDetailsPage() {
  return (
    <div className={classes.bookDetailsPage}>
      <div className={classes.detailsContainer}>
        <BookCard
          book={{
            author: "someauthor",
            img: "Image",
            stars: 3,
            title: "sometitle"
          }}
          large
        />
        <div className={classes.bookDetails}>
          <BookInfo />
        </div>
      </div>
      <div>other books</div>
    </div>
  );
}

export default BookDetailsPage;
