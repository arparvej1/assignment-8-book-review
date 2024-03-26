import { Link, NavLink } from 'react-router-dom';

const Header = () => {

  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/listed-books">Listed Books</NavLink></li>
    <li><NavLink to="/pages-to-read">Pages to Read</NavLink></li>
    <li><NavLink to="/error-page">Error</NavLink></li>
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost text-2xl md:text-3xl font-bold">Book Vibe</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <Link className="btn bg-[#23BE0A] text-white">Sign In</Link>
        <Link className="btn bg-[#59C6D2] text-white">Sign Up</Link>
      </div>
    </div>
  );
};

export default Header;