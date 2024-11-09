// src/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for routing

const Missing = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 justify-center items-center text-center p-4">
      <div className="bg-white p-10 rounded-lg shadow-xl max-w-lg w-full">
        <h1 className="text-6xl font-extrabold text-indigo-600">404</h1>
        <p className="mt-4 text-2xl text-gray-700">Oops! Page not found.</p>
        <p className="mt-2 text-gray-500">Sorry, the page you are looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="mt-6 inline-block bg-indigo-600 text-white px-6 py-2 rounded-full text-lg hover:bg-indigo-700 transition duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Missing;
