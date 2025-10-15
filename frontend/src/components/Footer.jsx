import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-30 backdrop-blur-md shadow-md relative bottom-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-sm">&copy; 2025 ReLife. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-green-600 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-700 hover:text-green-600 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;