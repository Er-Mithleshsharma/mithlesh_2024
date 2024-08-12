import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminHeader from './AdminHeader';

const AdminContact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    axios.post('https://testapi.o7services.com/api/allcontact')
      .then(response => {
        setContacts(response.data.service);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch contacts');
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    axios.get(`https://testapi.o7services.com/api/deletecontact/${id}`)
      .then(() => {
        // Refresh the contacts list
        fetchContacts();
      })
      .catch(err => {
        setError('Failed to delete contact');
      });
  };

  const handleViewUser = (id) => {
    navigate(`/view-user/${id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
        <AdminHeader/>
      <h1 className="text-2xl font-bold mb-4">Contacts List</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  onClick={() => handleViewUser(contact.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                >
                  View User
                </button>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminContact;
