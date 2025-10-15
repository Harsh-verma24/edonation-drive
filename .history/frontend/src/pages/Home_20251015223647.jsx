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
            className="rounded-lg"
          />
        </div>
        <div className="relative rounded-lg shadow-lg bg-white/30 backdrop-blur-md p-4">
          <img
            src="/maude-frederique-lavoie-EDSTj4kCUcw-unsplash.jpg"
            alt="Blue and White Textile"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;