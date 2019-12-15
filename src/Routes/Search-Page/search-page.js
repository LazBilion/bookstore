import React, { Component } from "react";
import BookCard from "Components/Book-Card";
import classes from "./search-page.module.css";
import { getBooks } from "API/data";
import { capitalize, transformBooks } from "Helpers";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.filters = ["author", "year", "publisher", "popularity"];
    this.state = {
      searchInput: "",
      activeFilterIndex: 0,
      books: []
    };
  }

  componentDidMount() {
    const books = transformBooks(getBooks());
    this.setState({ books });
  }

  handleClick = index => {
    this.setState({ activeFilterIndex: index });
  };

  handleChange = e => this.setState({ searchInput: e.target.value });

  render() {
    const books =
      this.state.activeFilterIndex >= 0 && this.state.searchInput
        ? this.state.books.filter(book => {
            const filterName = this.filters[this.state.activeFilterIndex];
            const field = book[filterName];
            return field && field.includes(this.state.searchInput);
          })
        : this.state.books;

    return (
      <div className={classes.searchPage}>
        <div className={classes.searchPageHeader}>
          <h1>Search to find your new book</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <input
          className={classes.inputField}
          type="text"
          placeholder="Search..."
          value={this.state.searchInput}
          onChange={this.handleChange}
        />

        <div className={classes.filter}>
          Filters:
          {this.filters.map((category, index) => (
            <button
              key={index}
              className={`
                ${classes.filterButton} 
                ${this.state.activeFilterIndex === index ? classes.active : ""}
              `}
              onClick={() => this.handleClick(index)}
            >
              {capitalize(category)}
            </button>
          ))}
        </div>

        <div className={classes.cardContainer}>
          {books.map(book => {
            return (
              <BookCard key={book.title} book={book} showTitle showRating />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchPage;
