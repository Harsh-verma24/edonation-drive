import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white bg-opacity-30 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-green-800">ReLife</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleDrawer} className="text-gray-800 hover:text-green-600 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}> 
            <a href="/" className="block text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="/donate" className="block text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Donate</a>
            <a href="/marketplace" className="block text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Marketplace</a>
            <a href="/rewards" className="block text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Rewards</a>
            <a href="/about" className="block text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;