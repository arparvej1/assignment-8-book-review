import { Link, NavLink } from 'react-router-dom';

const Header = () => {

  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/listed-books">Listed Books</NavLink></li>
    <li><NavLink to="/pages-to-read">Pages to Read</NavLink></li>
    <li><NavLink to="/about-us">About Us</NavLink></li>
    <li><NavLink to="/suggest-a-book">Suggest a Book</NavLink></li>
  </>

  const userBtn = <>
    <Link className="btn bg-[#23BE0A] text-white">Sign In</Link>
    <Link className="btn bg-[#59C6D2] text-white">Sign Up</Link>
  </>

  return (
    <>
      <nav className='flex justify-between'>
        <div className='flex w-full md:w-auto justify-between md:justify-start items-center'>
          <div className='flex lg:hidden'>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost m-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {links}
                <li className='flex flex-col md:hidden'>{userBtn}</li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-ghost text-2xl md:text-3xl font-bold">Book Vibe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-2">
            {links}
          </ul>
        </div>
        <div className='hidden md:flex gap-3'>
          {userBtn}
        </div>
      </nav>
    </>

  );
};

export default Header;