import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('book_list.json')
      .then(res => res.json())
      .then(data => setBooks(data));
  },[])

  return (
    <div>
      <div className='text-center'>
      <h3 className='font-bold text-4xl my-5'>Books</h3>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          books.map(book =><Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;