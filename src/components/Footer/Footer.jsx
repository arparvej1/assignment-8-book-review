import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <aside>
        <p className="font-bold text-2xl">
          Book Vibe
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 text-xl">
          <a><FaTwitter /></a>
          <a><FaYoutube /></a>
          <a><FaFacebookF /></a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;