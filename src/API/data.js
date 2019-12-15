import { books } from "./books";
import { generalFields, serverFields } from "./fields";

const getBooks = () => books;

const addBook = book => books.push(book);

const getBook = isbn => books.find(book => isbn === book.isbn);

const getOtherBooks = isbn =>
  books.filter(book => isbn !== book.isbn).slice(0, 4);

const extractFields = fields => {
  return fields.reduce((newBook, field) => {
    return { ...newBook, [field.key]: "" };
  }, {});
};

const getEmptyBook = () => {
  const generalFieldsObject = extractFields(generalFields);
  const serverFieldsObject = extractFields(serverFields);

  return {
    ...generalFieldsObject,
    ...serverFieldsObject
  };
};

export { getBooks, addBook, getBook, getOtherBooks, getEmptyBook };
