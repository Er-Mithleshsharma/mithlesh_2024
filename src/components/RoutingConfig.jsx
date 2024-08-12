import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from '../App.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Register from './Register.jsx';
import ViewUser from './ViewUser.jsx';
import AdminHome from './AdminHome.jsx';
import Login from './Login.jsx';
import Unauthorized from './Unauthorized.jsx'; // Import Unauthorized page
import AdminContact from './AdminContact.jsx';

const RoutingConfig = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const islogin  = location.pathname ===  "login";

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/view-users",
          element: <ViewUser />
        },
        {
          path: "/admin-home",
          element: isAuthenticated ? <AdminHome /> : <Navigate to="/unauthorized" />
        },
        {
          path: "/login",
          element: <Login onLogin={handleLogin} />
        },
        {
          path: "/unauthorized",
          element: <Unauthorized />
        },
        {
          path: "/admin-contact",
          element:  <AdminContact />
        },
      ],
      errorElement: <Error /> // Ensure this Error component exists
    }
  ]);

  return <RouterProvider router={appRouter} />;
};

export default RoutingConfig;
