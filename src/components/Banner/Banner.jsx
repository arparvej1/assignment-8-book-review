import { NavLink } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="hero bg-base-200 px-2 py-4 md:px-28 md:py-20 mt-5 mb-10 rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://i.ibb.co/Hgg5Qmz/Pride-and-Prejudice-Banner.png" className="md:max-w-sm rounded-lg" alt="Book" />
        <div className='flex flex-col gap-10'>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#131313]">Books to freshen up your bookshelf</h1>
          <div className='text-center md:text-start'>
            <NavLink to="/listed-books" className="btn bg-[#23BE0A] text-white">View The List</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;