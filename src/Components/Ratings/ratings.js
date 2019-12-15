import React from "react";
import PropTypes from "prop-types";
import classes from "./ratings.module.css";
import { FaStar } from "react-icons/fa";

const Ratings = ({ stars }) => {
  return (
    <div className={classes.ratings}>
      {Array(5)
        .fill()
        .map((_, index) => {
          const color = index < stars ? "yellow" : "white";
          return (
            <FaStar color={color} strokeWidth={10} stroke="black" key={index} />
          );
        })}
    </div>
  );
};

Ratings.propTypes = {
  stars: PropTypes.number.isRequired
};

export default Ratings;
