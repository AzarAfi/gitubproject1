import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left section */}
        <div>
          <p className="text-sm">© 2024 Your Company, Inc. All Rights Reserved.</p>
        </div>

        {/* Middle section */}
        <div className="space-x-6">
        <Link to="/" >Home</Link>
      <Link to="/newpost">NewPost</Link>
      <Link to="/about">About</Link>
        </div>

        {/* Right section */}
        <div className="space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
