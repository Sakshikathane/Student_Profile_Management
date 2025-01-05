import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 fixed top-0 w-full z-50 shadow-md">
      <ul className="flex justify-around">
        <li>
          <Link to="/" className="hover:underline font-semibold">Profile</Link>
        </li>
        <li>
          <Link to="/manage-skills" className="hover:underline font-semibold">Manage Skills</Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline font-semibold">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline font-semibold">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
