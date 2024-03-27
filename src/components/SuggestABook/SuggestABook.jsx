import React, { useState } from 'react';

const SuggestABook = () => {
  const [yourName, setYourName] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [yearOfPublishing, setYearOfPublishing] = useState('');
  const [summary, setSummary] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [displayBook, setDisplayBook] = useState('');
  const [displayAuthor, setDisplayAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", { yourName, yourEmail, bookName, author, yearOfPublishing, summary });

    setDisplayName(yourName);
    setDisplayBook(bookName);
    setDisplayAuthor(author);
    document.getElementById('submit_info').showModal();

    setYourName('');
    setYourEmail('');
    setBookName('');
    setAuthor('');
    setYearOfPublishing('');
    setSummary('');
  };
  return (
    <div>
      <div className="text-center rounded-2xl bg-base-200 py-6 my-5">
        <h1 className="text-2xl md:text-3xl font-bold text-[#131313]">Suggest a Book</h1>
      </div>
      <div className='md:w-3/5 lg:w-2/5 mx-auto my-6 md:my-12'>
        <form onSubmit={handleSubmit}>

          <label className="input input-bordered flex items-center gap-2">
            Name:
            <input type="text" id="yourName" value={yourName} onChange={(e) => setYourName(e.target.value)} className="grow" placeholder="Please give me your name" />
          </label>
          <br />
          <label className="input input-bordered flex items-center gap-2">
            Email:
            <input type="email" id="yourEmail" value={yourEmail} onChange={(e) => setYourEmail(e.target.value)} required className="grow" placeholder="Please give me your email" />
          </label>
          <br />
          <label className="input input-bordered flex items-center gap-2">
            Book:
            <input type="text" id="bookName" value={bookName} onChange={(e) => setBookName(e.target.value)} required className="grow" placeholder="Suggested book name" />
          </label>
          <br />
          <label className="input input-bordered flex items-center gap-2">
            Author:
            <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required className="grow" placeholder="Book author name" />
          </label>
          <br />
          <label className="input input-bordered flex items-center gap-2">
            Publishing:
            <input type="text" id="yearOfPublishing" value={yearOfPublishing} onChange={(e) => setYearOfPublishing(e.target.value)} className="grow" placeholder="Publishing year here" />
          </label>
          <br />
          <label className="flex items-center gap-2 mb-3">
            Summary:
          </label>
          <textarea id="summary" value={summary} onChange={(e) => setSummary(e.target.value)} className="textarea textarea-bordered w-full" rows="4" cols="50" placeholder="Write a summary about the book" ></textarea>

          <div className='grow text-center mt-4'>
            <input className='btn btn-primary btn-wide' type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <div>
        <dialog id="submit_info" className="modal">
          <div className="modal-box flex flex-col gap-2">
            <h3 className="font-bold text-lg">Hi, {displayName}!</h3>
            <p className='text-justify'>Thank you for the book suggestion. We will collect this book and notify your email.</p>
            <table className='md:w-1/2'>
              <tr>
                <td>Book Name: </td>
                <td className='font-bold'>{displayBook}</td>
              </tr>
              <tr>
                <td>Author Name:</td>
                <td>{displayAuthor}</td>
              </tr>
            </table>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default SuggestABook;