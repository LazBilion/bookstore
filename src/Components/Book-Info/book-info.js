import React from "react";
import classes from "./book-info.module.css";

const book = {
  isbn: "9781593275846",
  year: 2014,
  title: "Eloquent JavaScript, Second Edition",
  subtitle: "A Modern Introduction to Programming",
  author: "Marijn Haverbeke",
  published: "2014-12-14T00:00:00.000Z",
  publisher: "No Starch Press",
  pages: 472,
  description:
    "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
  website: "http://eloquentjavascript.net/",
  rating: 3,
  categories: ["Horror"]
};

function BookInfo({ location }) {
  // const book = location.state.book;
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
