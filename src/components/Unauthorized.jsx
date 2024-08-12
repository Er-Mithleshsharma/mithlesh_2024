import React from 'react';

const Unauthorized = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-100 h-screen">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg border border-gray-300">
        <h2 className="text-3xl font-bold mb-4 text-red-600">Unauthorized Access</h2>
        <p className="text-lg text-gray-700">
          You do not have permission to access this page.
        </p>
      </div>
    </div>
  );
};

export default Unauthorized;
