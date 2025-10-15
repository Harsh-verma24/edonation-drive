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
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src="/Hero-1.jpg"
          alt="Hero Image 1"
          className="rounded-lg shadow-lg"
        />
        <img
          src="/Hero-2.jpg"
          alt="Hero Image 2"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-800">Why Choose ReLife?</h2>
        <p className="mt-4 text-gray-700 text-lg">ReLife is dedicated to creating a sustainable future by encouraging donations and rewarding generosity. Your contributions help reduce waste, support underprivileged communities, and inspire others to make a difference.</p>
        <p className="mt-4 text-gray-700 text-lg">Join us in our mission to make the world a better place, one donation at a time.</p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative rounded-lg shadow-lg bg-white/30 backdrop-blur-md p-4">
          <img
            src="/katt-yukawa-K0E6E0a0R3A-unsplash.jpg"
            alt="Make a Change"
            className="rounded-lg w-full h-64 object-cover"
          />
        </div>
        <div className="relative rounded-lg shadow-lg bg-white/30 backdrop-blur-md p-4">
          <img
            src="/maude-frederique-lavoie-EDSTj4kCUcw-unsplash.jpg"
            alt="Blue and White Textile"
            className="rounded-lg w-full h-64 object-cover"
          />
        </div>
      </div>
      <footer className="text-gray-800 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-xl font-bold">About ReLife</h3>
              <p className="mt-4 text-gray-600 text-sm">ReLife is a donation-driven platform designed to promote sustainability and community support. By connecting donors with those in need, we aim to reduce waste and foster a culture of sharing and generosity.</p>
              <p className="mt-4 text-gray-600 text-sm">Our mission is to make the world a better place, one donation at a time.</p>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="mt-4 text-gray-600 text-sm">We envision a world where resources are shared responsibly, and everyone has access to the essentials they need. Through ReLife, we strive to create a sustainable future by encouraging mindful consumption and generosity.</p>
              <p className="mt-4 text-gray-600 text-sm">Join us in building a community that cares for the planet and its people.</p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            &copy; 2025 ReLife. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;