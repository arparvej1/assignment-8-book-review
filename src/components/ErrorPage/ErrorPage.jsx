import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='max-w-7xl mx-2 md:mx-4 lg:mx-auto mt-4 mb-7'>      <Header></Header>
      <div className='flex flex-col justify-center items-center gap-4 p-4'>
        <h3>Oops!!!! </h3>
        <Link className='btn mx-auto' to='/'>Go Back to Home</Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;