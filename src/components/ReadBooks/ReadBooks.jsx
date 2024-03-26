import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi2";


const ReadBooks = ({ book }) => {
  const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
  return (
    <div className='flex flex-col md:flex-row items-center gap-6 p-6 border-2 rounded-3xl'>
      <div className='flex justify-center items-center bg-[#f3f3f3] p-6 rounded-3xl w-full md:w-w-1/4 lg:w-1/6'>
        <img src={image} alt="" />
      </div>
      <div className='flex flex-col gap-3'>
        <h3 className='font-bold text-2xl md:text-3xl'>{bookName}</h3>
        <p>By: {author}</p>
        <div className='flex flex-col md:flex-row gap-3 md:items-center'>
          <p className='flex gap-1 md:gap-3 items-center'>
            <span className='font-bold'>Tag</span>
            {
              tags.map(tag => <span className='text-[#23BE0A] font-semibold bg-[#23BE0A0D] py-1 px-2 md:px-3 rounded-xl'>{tag}</span>)
            }
          </p>
          <p className='flex gap-2 items-center'><FiMapPin className='text-xl' /> <span> Year of Publishing: {yearOfPublishing}</span></p>
        </div>
        <div className='flex flex-col md:flex-row gap-3'>
          <p className='flex gap-2 items-center'><HiOutlineUsers className='text-xl' /> <span>Publisher: {publisher}</span></p>
          <p className='flex gap-2 items-center'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <defs>
                <clipPath id="clip13_11212">
                  <path fill="#fff" fillOpacity="0" d="M0 0H24V24H0z"></path>
                </clipPath>
              </defs>
              <path fill="#FFF" fillOpacity="0" d="M0 0H24V24H0z"></path>
              <g clipPath="url(#clip13_11212)">
                <path
                  stroke="#131313"
                  strokeLinejoin="round"
                  strokeOpacity="0.6"
                  strokeWidth="1.5"
                  d="M19.5 14.25v-2.63c0-.89-.36-1.75-.99-2.39-.64-.63-1.49-.98-2.39-.98h-1.5c-.3 0-.58-.12-.8-.33-.21-.22-.32-.5-.32-.8v-1.5c0-.9-.36-1.75-.99-2.39-.64-.63-1.49-.98-2.39-.98H8.25M9 16.5v.75m3-3v3M15 12v5.25m-9.38-15c-.62 0-1.12.5-1.12 1.12v17.25c0 .62.5 1.13 1.12 1.13h12.75c.62 0 1.13-.51 1.13-1.13v-9.37c0-2.39-.95-4.68-2.64-6.37a8.992 8.992 0 00-6.36-2.63H5.62z"
                ></path>
              </g>
            </svg>
            <span>Page {totalPages}</span>
          </p>
        </div>
        <hr />
        <div className='flex flex-col md:flex-row gap-3'>
          <span className='text-[#328EFF] font-medium bg-[#328EFF26] py-3 px-4 rounded-3xl'>Category: {category}</span>
          <span className='text-[#FFAC33] font-medium bg-[#FFAC3326] py-3 px-4 rounded-3xl'>Rating: {rating}</span>
          <Link to={`../books/${bookId}`} className="btn bg-[#23BE0A] text-white rounded-3xl">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;