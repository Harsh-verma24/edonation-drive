import React from 'react';

const Home = () => {
  return (
    <div className="p-12 bg-gradient-to-r from-green-100 to-blue-100 min-h-screen">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-green-800">Welcome to ReLife</h1>
        <p className="mt-6 text-gray-700 text-xl">A step towards a greener planet. Donate your reusable items and earn rewards!</p>
        <p className="mt-4 text-gray-600 text-lg">Every donation helps reduce waste, supports underprivileged communities, and promotes a culture of sharing and sustainability. Together, we can make a difference!</p>
        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="/donate"
            className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-green-700 text-lg"
          >
            Donate Now
          </a>
          <a
            href="/register-ngo"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 text-lg"
          >
            Register NGO
          </a>
        </div>
      </div>
      <div className="mt-16">
        <img
          src="/vite.svg"
          alt="Hero Image"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;