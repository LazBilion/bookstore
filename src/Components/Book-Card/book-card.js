import React from "react";
import classes from "./book-card.module.css";
import Ratings from "Components/Ratings";
import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookCard = ({ book, large, showAuthor, showRating, showTitle }) => {
  const { img = "Image", title, rating, author } = book;
  return (
    <div className={`${classes.bookCard} ${large ? classes.large : ""}`}>
      <Link to={`/category/${book.isbn}`}>
        <div className={classes.image}>{img}</div>
      </Link>
      {!!author && showAuthor && (
        <div className={classes.author}>
          <FaUserCircle
            size={24}
            color="transparent"
            stroke="black"
            strokeWidth={40}
          />
          {author}
        </div>
      )}
      {!!title && showTitle && <div className={classes.title}>{title}</div>}
      {!!rating && showRating && <Ratings rating={rating} />}
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  large: PropTypes.bool
};

export default BookCard;
