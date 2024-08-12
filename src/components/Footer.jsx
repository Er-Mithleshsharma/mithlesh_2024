import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <Link to="/register" className="hover:text-gray-400">
            Register
          </Link>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Mithlesh sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
