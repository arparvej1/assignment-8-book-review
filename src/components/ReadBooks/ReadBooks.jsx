import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";


const ReadBooks = ({ book }) => {
  const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
  return (
    <div className='flex flex-col md:flex-row items-center gap-6 p-6 border-2 rounded-3xl'>
      <div className='flex justify-center items-center bg-[#f3f3f3] p-6 rounded-3xl w-1/3 md:w-w-1/4 lg:w-1/6'>
        <img src={image} alt="" />
      </div>
      <div className='flex flex-col gap-3'>
        <h3>{bookName}</h3>
        <p>By: {author}</p>
        <div className='flex gap-3 items-center'>
          <span className='font-bold'>Tag</span>
          {
            tags.map(tag => <span className='text-[#23BE0A] font-semibold bg-[#23BE0A0D] py-1 px-3 rounded-xl'>{tag}</span>)
          }

          <p className='flex gap-2 items-center'><FiMapPin className='text-xl' /> <span> Year of Publishing: {yearOfPublishing}</span></p>
        </div>
        <div className='flex gap-3'>
          <p className='flex gap-2 items-center'><HiOutlineUsers className='text-xl' /> <span>Publisher: {publisher}</span></p>
          <p className='flex gap-2 items-center'>
          <MdOutlineContactPage className='text-2xl' />
            <span>Page {totalPages}</span>
          </p>
        </div>
        <hr />
        <div className='flex gap-3'>
          <span className='text-[#328EFF] font-medium bg-[#328EFF26] py-3 px-4 rounded-3xl'>Category: {category}</span>
          <span className='text-[#FFAC33] font-medium bg-[#FFAC3326] py-3 px-4 rounded-3xl'>Rating: {rating}</span>
          <Link to={`../books/${bookId}`} className="btn bg-[#23BE0A] text-white rounded-3xl">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;