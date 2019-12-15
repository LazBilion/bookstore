import { books } from "./books";

const getBooks = () => books;

const addBook = book => books.push(book);

export { getBooks, addBook };
