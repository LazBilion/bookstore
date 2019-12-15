const generalFields = [
  {
    displayName: "Title",
    key: "title"
  },
  {
    displayName: "Author Name",
    key: "author"
  },
  {
    displayName: "Year",
    key: "published"
    // transform: v => new Date(v).toISOString()
  },
  {
    displayName: "Publisher",
    key: "publisher"
  },
  {
    displayName: "Pages",
    key: "pages",
    transform: v => Number(v)
  },
  {
    displayName: "Description",
    key: "description"
  },
  {
    displayName: "Categories",
    key: "categories",
    transform: v => v.split(" ")
  }
];

const serverFields = [
  {
    displayName: "ISBN-13",
    key: "isbn"
  },
  {
    displayName: "Rating",
    key: "rating",
    transform: v => Number(v)
  }
];

export { generalFields, serverFields };
