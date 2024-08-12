import React from 'react';
import AdminHeader from './AdminHeader';

const AdminHome = () => {
  return (
    <>
    <AdminHeader/>
    <div className="max-w-md mx-auto mt-16 p-4">
      <h2 className="text-2xl font-bold">Welcome to the Admin Home Page</h2>
      <p>This is a secured page for the admin.</p>
    </div></>
  );
};

export default AdminHome;
