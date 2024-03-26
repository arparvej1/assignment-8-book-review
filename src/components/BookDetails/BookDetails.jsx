import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books.find(book => book.bookId === idInt);

  const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

  return (
    <div className="flex gap-12 my-10">
      <div className="w-1/2 bg-[#f3f3f3] rounded-3xl p-16">
        <img className="w-full" src={image} alt={bookName} />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-4xl">{bookName}</h3>
        <p className="font-semibold">By: {author}</p>
        <hr />
        <p className="font-semibold">{category}</p>
        <hr />
        <p><span className="font-bold">Review:</span> {review}</p>
        <p className='flex gap-3 items-center'>
          <span className="font-bold">Tag</span>
          {
            tags.map(tag => <span className='text-[#23BE0A] bg-[#23BE0A0D] py-1 px-3 rounded-xl'>{tag}</span>)
          }
        </p>
        <hr />
        <table>
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
          <button className="btn bg-white">Read</button>
          <button className="btn text-white bg-[#50B1C9]">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;