import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <Header></Header>
      <div className='flex flex-col justify-center items-center gap-4 p-4'>
        <h3>Oops!!!! </h3>
        <Link className='btn mx-auto' to='/'>Go Back to Home</Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;