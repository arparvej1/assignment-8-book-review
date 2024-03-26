import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from '../ReadBooks/ReadBooks';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoredBookList } from '../utility/localStorage';

const ListedBooks = () => {
  const books = useLoaderData();
  const [readBookList, setReadBookList] = useState([]);
  const [wishlistBookList, setWishlistBookList] = useState([]);

  useEffect(() => {
    const readBook = getStoredBookList("readBook");
    const wishlistBook = getStoredBookList("wishlistBook");

    if (books.length > 0) {
      const readAdded = books.filter(book => readBook.includes(book.bookId));
      setReadBookList(readAdded);

      const wishlistAdded = books.filter(book => wishlistBook.includes(book.bookId));
      setWishlistBookList(wishlistAdded);
    }
  }, [])

  return (
    <div>
      <div className="text-center rounded-2xl bg-base-200 py-6 my-5">
        <h1 className="text-2xl md:text-3xl font-bold text-[#131313]">Books</h1>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            readBookList: {readBookList.length}
            <div className='flex flex-col gap-7 my-7'>
              {
                readBookList.map(book => <ReadBooks key={book.bookId} book={book}></ReadBooks>)
              }
            </div>
          </TabPanel>
          <TabPanel>
            WishlistBooks: {wishlistBookList.length}
            <div className='flex flex-col gap-7 my-7'>
              {
                wishlistBookList.map(book => <ReadBooks key={book.bookId} book={book}></ReadBooks>)
              }
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;