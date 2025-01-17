import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredBookList, saveBookList } from "../utility/localStorage";
import { useEffect, useState } from "react";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books.find(book => book.bookId === idInt);
  const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

  const [readList, setReadList] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const readListCheck = getStoredBookList("readBook", idInt);
    setReadList(readListCheck);

    const wishlistCheck = getStoredBookList("wishlistBook", idInt);
    setWishlist(wishlistCheck);
  }, []);

  const handleReadList = () => {
    if (!readList.includes(idInt)) {
      const readListCall = saveBookList("readBook", idInt);
      setReadList(readListCall);
      toast.success("Book Added to Read List!");
    } else {
      toast.error("You have Already Read this Book!");
    }
  };

  const handleWishlist = () => {
    if (!readList.includes(idInt) || !wishlist.includes(idInt)) {

      if (wishlist.includes(idInt)) {
        toast.error("You have Already Added this Wishlist!");
      } else if (readList.includes(idInt)) {
        toast.error("You have Already Read this Book!");
      } else {
        const wishlistCall = saveBookList("wishlistBook", idInt);
        setWishlist(wishlistCall);
        toast.success("Book Added to Wishlist!");
      }
    } else {
      toast.error("You have Already Read this Book!");
    }

  };

  return (
    <div className="grid md:grid-cols-2 gap-12 my-10">
      <div className="bg-[#f3f3f3] rounded-3xl p-16">
        <img className="w-full" src={image} alt={bookName} />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-4xl">{bookName}</h3>
        <p className="font-semibold">By: {author}</p>
        <hr />
        <p className="font-semibold">{category}</p>
        <hr />
        <p className="text-justify"><span className="font-bold">Review:</span> {review}</p>
        <p className='flex gap-3 items-center'>
          <span className="font-bold">Tag</span>
          {
            tags.map(tag => <span className='text-[#23BE0A] bg-[#23BE0A0D] py-1 px-3 rounded-xl'>{tag}</span>)
          }
        </p>
        <hr />
        <table className="w-2/3 md:w-full lg:w-2/3">
          <tr>
            <td>Number of Pages:</td>
            <td className="font-semibold">{totalPages}</td>
          </tr>
          <tr>
            <td>Publisher:</td>
            <td className="font-semibold">
              {publisher}</td>
          </tr>
          <tr>
            <td>Year of Publishing:</td>
            <td className="font-semibold">{yearOfPublishing}</td>
          </tr>
          <tr>
            <td>Rating:</td>
            <td className="font-semibold">{rating}</td>
          </tr>
        </table>
        <div className="flex gap-3">
          <button onClick={handleReadList} className="btn bg-white hover:text-white hover:bg-[#23BE0A] border-gray-500 px-6">Read</button>
          <button onClick={handleWishlist} className="btn text-white bg-[#50B1C9] hover:bg-[#148fad] px-6">Wishlist</button>
        </div>
        <div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;