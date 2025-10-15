import React from 'react';

const Home = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-green-100 to-blue-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-green-800 text-center">Welcome to ReLife</h1>
      <p className="mt-4 text-center text-gray-700 text-lg">A step towards a greener planet. Donate your reusable items and earn rewards!</p>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-green-700">Why Donate?</h2>
        <p className="mt-2 text-gray-600">Every donation helps reduce waste and promotes recycling. Together, we can make a difference!</p>
        <h2 className="mt-6 text-2xl font-bold text-green-700">What Can You Donate?</h2>
        <ul className="mt-2 text-gray-600 list-disc list-inside">
          <li>Old Clothes</li>
          <li>Plastic Bottles</li>
          <li>Used Bags</li>
          <li>Electronics</li>
          <li>And much more...</li>
        </ul>
        <h2 className="mt-6 text-2xl font-bold text-green-700">How It Works</h2>
        <p className="mt-2 text-gray-600">Register, donate at a nearby drop-off location, and earn rewards for your contributions!</p>
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <a href="/donate" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700">Donate Now</a>
        <a href="/marketplace" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">Visit Marketplace</a>
      </div>
    </div>
  );
};

export default Home;