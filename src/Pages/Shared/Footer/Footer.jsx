import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="flex pb-4 text-[14px] font-light flex-col md:flex-row md:justify-between text-white">
      <p className="text-xs">
        © {new Date().getFullYear()} HomeownersBenifit. All rights reserved
      </p>
      <ul className="flex  space-x-5">
        <li>
          <Link to="/" className="hover:underline">
            Terms
          </Link>
        </li>
        <span>|</span>
        <li>
          <Link to="/" className="hover:underline">
            Privacy Policy
          </Link>
        </li>
        <span>|</span>
        <li>
          <Link to="/" className="hover:underline">
            License Information
          </Link>
        </li>
      </ul>
    </footer>
  );
};
