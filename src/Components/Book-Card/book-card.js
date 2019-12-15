import React from "react";
import classes from "./book-card.module.css";
import Ratings from "Components/Ratings";
import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";

const BookCard = ({ book: { img, title, stars, author }, large }) => {
  return (
    <div className={`${classes.bookCard} ${large ? classes.large : ""}`}>
      <div className={classes.image}>{img}</div>
      {!!author && (
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
      {!!title && <div className={classes.title}>{title}</div>}
      {!!stars && <Ratings stars={stars} />}
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  large: PropTypes.bool
};

export default BookCard;
