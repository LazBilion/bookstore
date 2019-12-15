import { books } from "./books";

const getBooks = () => books;

const addBook = book => books.push(book);

const getBook = isbn => books.find(book => isbn === book.isbn);

const getOtherBooks = isbn =>
  books.filter(book => isbn !== book.isbn).slice(0, 4);

export { getBooks, addBook, getBook, getOtherBooks };
