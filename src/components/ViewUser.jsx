import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post('https://testapi.o7services.com/api/allcontact');
        if (response.status === 200) {
          setUsers(response.data?.service);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('An error occurred while fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  return users && (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User Profiles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map((user, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold mb-2">{user.name}</h3>
            <p className="text-gray-600 mb-2">Email: {user.email}</p>
            <p className="text-gray-600 mb-2">Phone: {user.phone}</p>
            <p className="text-gray-600 mb-2">State: {user.state}</p>
            <p className="text-gray-600 mb-2">City: {user.city}</p>
            <p className="text-gray-600 mb-2">Qualification: {user.qualification}</p>
            <p className="text-gray-600">Address: {user.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewUser;
