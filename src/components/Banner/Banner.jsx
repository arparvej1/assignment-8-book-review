import React from 'react';

const Banner = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className="hero bg-base-200 px-28 py-20 rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/nkPCqsZ/b9a8-banner.png" className="max-w-sm rounded-lg" alt="Book" />
          <div className='flex flex-col gap-10'>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#131313]">Books to freshen up your bookshelf</h1>

            <div className='text-center md:text-start'>
              <button className="btn bg-[#23BE0A] text-white">View The List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;