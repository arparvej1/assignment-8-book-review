const getStoredBookList = () => {
  const storedBookList = localStorage.getItem("bookList");
  if (storedBookList) {
    return JSON.parse(storedBookList);
  }
  return [];
}

const saveBookList = id => {
  const storedBookLists = getStoredBookList();
  const exists = storedBookLists.find(bookId => bookId === id);
  if(!exists){
    storedBookLists.push(id);
    localStorage.setItem("bookList", JSON.stringify(storedBookLists));
  }
}

export { getStoredBookList, saveBookList }