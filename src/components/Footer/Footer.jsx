import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <aside>
        <p className="font-bold text-2xl md:text-3xl">
        BookWorm
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 text-xl">
          <Link><FaTwitter /></Link>
          <Link><FaYoutube /></Link>
          <Link><FaFacebookF /></Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;