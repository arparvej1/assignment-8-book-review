const getStoredBookList = (listName) => {
  const storedBookList = localStorage.getItem(listName);
  if (storedBookList) {
    return JSON.parse(storedBookList);
  }
  return [];
}

const saveBookList = (listName, id) => {
  const storedBookLists = getStoredBookList(listName);
  const exists = storedBookLists.find(bookId => bookId === id);
  if (!exists) {
    storedBookLists.push(id);
    localStorage.setItem(listName, JSON.stringify(storedBookLists));
  }
  return storedBookLists;
}

export { getStoredBookList, saveBookList }