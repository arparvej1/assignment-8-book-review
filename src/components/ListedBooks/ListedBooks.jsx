import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from '../ReadBooks/ReadBooks';
import WishlistBooks from '../WishlistBooks/WishlistBooks';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoredBookList } from '../utility/localStorage';

const ListedBooks = () => {
  const books = useLoaderData();
  const [readBookList, setReadBookList] = useState([]);

  useEffect(() => {
    const readBook = getStoredBookList();
    const wishlistBookList = 2;

    if (books.length > 0) {
      const readAdded = books.filter(book => readBook.includes(book.bookId));
      setReadBookList(readAdded);
    }
  }, [])

  console.log(books);
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
            <WishlistBooks></WishlistBooks>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;