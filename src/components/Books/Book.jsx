import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link to={`books/${bookId}`}>
      <div className='flex flex-col gap-4 border-2 rounded-3xl p-6 font-medium'>
        <div className='flex justify-center p-7 bg-[#f3f3f3] rounded-3xl '>
          <img className="w-[150px]" src={image} alt="" />
        </div>
        <div className='flex gap-3'>
          {
            tags.map(tag => <span className='text-[#23BE0A] bg-[#23BE0A0D] py-1 px-3 rounded-xl'>{tag}</span>)
          }
        </div>
        <h3 className='font-bold text-2xl'>{bookName}
        </h3>
        <p>By : {author}</p>
        <hr className='border-2 border-dashed' />
        <div className='flex justify-between'>
          <p>{category}</p>
          <div className='flex gap-2 justify-center items-center'>
            <span>{rating}</span>
            <span><CiStar className="text-xl" /></span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;