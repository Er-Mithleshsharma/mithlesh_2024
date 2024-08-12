import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); // Redirect to login page or any other page
  };

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white text-2xl font-semibold">
          <Link to="/" className="hover:text-gray-300">
            MyApp
          </Link>
        </div>
        <div className="space-x-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to="/view-users"
            className="text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2 rounded-md text-sm font-medium"
          >
            View User
          </Link>
          <Link
            to="/admin-contact"
            className="text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2 rounded-md text-sm font-medium"
          >
            View Contact
          </Link>
          <button
            onClick={handleLogout}
            className="text-gray-300 hover:text-red-500 transition-colors duration-300 px-4 py-2 rounded-md text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;
