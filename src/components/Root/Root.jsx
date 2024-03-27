import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
  return (
    <div>
      <div className='max-w-7xl mx-4 md:mx-6 lg:mx-auto mt-4 mb-7'>
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;