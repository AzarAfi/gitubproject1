
import React from 'react';
import { Route, Router, Routes,Link } from "react-router-dom"

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-indigo-600 text-white py-6 px-8">
          <h1 className="text-4xl font-extrabold">About Us</h1>
          <p className="mt-4 text-lg">We are a passionate team dedicated to providing the best service possible.</p>
        </div>

        {/* Body Section */}
        <div className="px-8 py-6">
          <div className="space-y-6">
            <p className="text-gray-700 text-lg">
              Our company was founded with a simple mission: to help our customers achieve their goals through innovative
              solutions. Whether you're a small business or a large enterprise, we're here to help you succeed in a rapidly
              changing world.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2 text-indigo-600">✔</span> Integrity - We believe in being honest and transparent in all our dealings.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-indigo-600">✔</span> Innovation - We constantly strive to innovate and improve.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-indigo-600">✔</span> Customer Success - Our customers are at the heart of everything we do.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800">Meet the Team</h2>
            <p className="text-gray-700">
              Our team consists of talented individuals from diverse backgrounds. Together, we are committed to achieving excellence in everything we do.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-800 text-white py-6 px-8 text-center">
          <p className="text-sm">
            &copy; 2024 Our Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
