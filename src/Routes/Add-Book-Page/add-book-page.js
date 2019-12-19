import React, { Component } from "react";
import classes from "./add-book-page.module.css";
import { getEmptyBook, addBook } from "API/data";
import { generalFields, serverFields } from "API/fields";

const ALL_FIELDS = [...generalFields, ...serverFields];

class AddBookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBook: getEmptyBook(),
      errors: [],
      success: false
    };
  }

  mapFields = fields =>
    fields.map(field => {
      let value = this.state.newBook[field.key];

      if (Array.isArray(value)) {
        value = value.join(" ");
      }

      return (
        <tr key={field.key} className={classes.fieldRow}>
          <td>
            <label htmlFor={`${field.key}-input`}>{field.displayName}</label>
          </td>
          <td>
            <input
              autoComplete={"off"}
              name={field.key}
              id={`${field.key}-input`}
              onChange={this.handleChange}
              value={value}
            />
          </td>
        </tr>
      );
    });

  handleChange = e => {
    const key = e.target.name;
    let value = e.target.value;

    this.setState(oldState => ({
      ...oldState,
      newBook: {
        ...oldState.newBook,
        [key]: value
      }
    }));
  };

  handleNewBook = () => {
    this.setState({ newBook: getEmptyBook() });
  };

  handleSave = () => {
    if (this.validateFields()) {
    addBook(this.state.newBook);
    this.setState({ success: true });
    }
  };

  validateFields = () => {
    const errors = [];
    ALL_FIELDS.forEach(field => {
      let fieldValue = this.state.newBook[field.key];
      if (typeof field.transform === "function") {
        try {
          fieldValue = field.transform(fieldValue);
        } catch (e) {}
      }

      switch (field.key) {
        case "title": {
          const validation = /[a-zA-Z@”#&*!]{10,120}/;
          if (!validation.test(fieldValue)) {
            errors.push(
              'Title should be between 10 and 120 chars, and only @"#&*! are allowed'
            );
          }
          break;
        }
        case "description": {
          const validation = /^[A-Z].{0,511}/;
          if (!validation.test(fieldValue)) {
            errors.push(
              "Description should start with an uppercase and be up to 512 chars long"
            );
          }
          break;
        }
        case "categories": {
          if (fieldValue.length > 4) {
            errors.push("There should be up to 4 categories for a book");
          }
          break;
        }
        case "publisher": {
          const validation = /.{5,60}/;
          if (!validation.test(fieldValue)) {
            errors.push("Publisher's name should be between 5 and 60 chars");
          }
          break;
        }
        case "published": {
          try {
            new Date(fieldValue).toISOString();
          } catch (err) {
            errors.push("Please enter a valid Year");
          }
          break;
        }
        case "pages": {
          if (fieldValue > 9999) {
            errors.push("This book is huge");
          }
          break;
        }
        case "isbn": {
          const validation = /^\d{13}$/;
          if (!validation.test(fieldValue)) {
            errors.push("ISBN should be 13 digits long");
          }
          break;
        }
      }
    });

    this.setState({ errors });

    return errors.length < 1;
  };

  render() {
    return (
      <div className={classes.addBookPage}>
        <h2 className={classes.addNewBookHeader}>Add New Book</h2>
        <div className={classes.bookDetailInputs}>
          <div className={classes.generalInfoContainer}>
            <table className={classes.generalBookInfo}>
              <tbody>{this.mapFields(generalFields)}</tbody>
            </table>
          </div>

          <div className={classes.serverInfoContainer}>
            <div className={classes.imageImport}>
              <div className={classes.imageImportBox}>
                <p>Image Import</p>
              </div>
            </div>
            <table className={classes.serverBookInfo}>
              <tbody>{this.mapFields(serverFields)}</tbody>
            </table>
          </div>
        </div>

        <div className={classes.addBookButtons}>
          <button className={classes.saveButton} onClick={this.handleSave}>
            Save
          </button>
          <button className={classes.addNewBook} onClick={this.handleNewBook}>
            Add new book
          </button>
        </div>

        {this.state.success && (
          <div className={classes.successContainer}>
            Book Saved Successfully!
          </div>
        )}

        <div className={classes.errorContainer}>
          <ul>
            {this.state.errors.length > 0 &&
              this.state.errors.map((error, index) => {
                return <li key={index}>{error}</li>;
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default AddBookPage;
