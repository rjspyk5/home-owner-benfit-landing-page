import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="flex pb-4  font-light flex-col md:flex-row md:justify-between text-white">
      <p className="text-[13px] md:text-[14px] py-1">
        © {new Date().getFullYear()} HomeownersBenifit. All rights reserved
      </p>
      <ul className="flex text-[13px] md:text-[14px] py-1 xs:whitespace-nowrap space-x-5">
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
