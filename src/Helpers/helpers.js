const capitalize = str => str[0].toUpperCase() + str.slice(1);

const transformBook = book => {
  const year = new Date(book.published).getFullYear().toString();
  const popularity = book.rating.toString();

  return { ...book, year, popularity };
};

const transformBooks = books => books.map(transformBook);

export { capitalize, transformBooks, transformBook };
