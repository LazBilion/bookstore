import React from "react";
import PropTypes from "prop-types";
import classes from "./ratings.module.css";
import { FaStar } from "react-icons/fa";

const Ratings = ({ rating }) => {
  return (
    <div className={classes.ratings}>
      {Array(5)
        .fill()
        .map((_, index) => {
          const color = index < rating ? "yellow" : "white";
          return (
            <FaStar color={color} strokeWidth={10} stroke="black" key={index} />
          );
        })}
    </div>
  );
};

Ratings.propTypes = {
  rating: PropTypes.number.isRequired
};

export default Ratings;
