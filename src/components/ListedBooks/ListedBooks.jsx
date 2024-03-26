import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from '../ReadBooks/ReadBooks';
import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoredBookList } from '../utility/localStorage';
import { IoIosArrowDown } from "react-icons/io";


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

  const handleSort = (sortBtn) => {
    readBookList.sort(function (a, b) { return b[sortBtn] - a[sortBtn] });
    wishlistBookList.sort(function (a, b) { return b[sortBtn] - a[sortBtn] });
  }

  return (
    <div>
      <div className="text-center rounded-2xl bg-base-200 py-6 my-5">
        <h1 className="text-2xl md:text-3xl font-bold text-[#131313]">Books</h1>
      </div>
      <div className='my-6 text-center'>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] hover:bg-[#22be0ac5] text-white w-52">Sort By <IoIosArrowDown className='text-2xl' />
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link onClick={() => handleSort('rating')}>Rating</Link></li>
            <li><Link onClick={() => handleSort('totalPages')}>Number of pages</Link></li>
            <li><Link onClick={() => handleSort('yearOfPublishing')}>Publisher year</Link></li>
          </ul>
        </div>


      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <h3 className={`font-semibold ${readBookList.length ? 'hidden' : ''} text-3xl my-10`}>No Read Books Found!</h3>
            <div className='flex flex-col gap-7 my-7'>
              {
                readBookList.map(book => <ReadBooks key={book.bookId} book={book}></ReadBooks>)
              }
            </div>
          </TabPanel>
          <TabPanel>
            <h3 className={`font-semibold ${wishlistBookList.length ? 'hidden' : ''} text-3xl my-10`}>No Wishlist Found!</h3>
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