import { Link, NavLink } from 'react-router-dom';

const Header = () => {

  const navActiveClass = 'border-2 border-[#23BE0A] text-[#23BE0A] text-lg font-semibold';
  const navClass = 'text-lg';

  const links = <>
    <li><NavLink to="/" className={({ isActive }) => (isActive ? `${navActiveClass}` : `${navClass}`)}>Home</NavLink></li>
    <li><NavLink to="/listed-books" className={({ isActive }) => (isActive ? `${navActiveClass}` : `${navClass}`)}>Listed Books</NavLink></li>
    <li><NavLink to="/pages-to-read" className={({ isActive }) => (isActive ? `${navActiveClass}` : `${navClass}`)}>Pages to Read</NavLink></li>
    <li><NavLink to="/about-us" className={({ isActive }) => (isActive ? `${navActiveClass}` : `${navClass}`)}>About Us</NavLink></li>
    <li><NavLink to="/suggest-a-book" className={({ isActive }) => (isActive ? `${navActiveClass}` : `${navClass}`)}>Suggest a Book</NavLink></li>
  </>

  const userBtn = <>
    <Link className="btn bg-[#23BE0A] text-white">Sign In</Link>
    <Link className="btn bg-[#59C6D2] text-white">Sign Up</Link>
  </>

  return (
    <>
      <nav className='flex justify-between items-center'>
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
          <Link className="btn btn-ghost text-2xl md:text-3xl font-bold">BookWorm</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-1">
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