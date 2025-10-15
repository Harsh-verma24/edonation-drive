import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="p-12 bg-gradient-to-r from-green-100 to-blue-100 min-h-screen">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-green-800">Welcome to ReLife</h1>
        <p className="mt-6 text-gray-700 text-xl">A step towards a greener planet. Donate your reusable items and earn rewards!</p>
        <p className="mt-4 text-gray-600 text-lg">Every donation helps reduce waste, supports underprivileged communities, and promotes a culture of sharing and sustainability. Together, we can make a difference!</p>
        <div className="mt-12 text-center">
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
        <div className="mt-12 flex justify-center space-x-6">
          <motion.a
            href="/donate"
            className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-green-700 text-lg"
            whileHover={{ scale: 1.1 }}
          >
            Donate Now
          </motion.a>
          <motion.a
            href="/register-ngo"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 text-lg"
            whileHover={{ scale: 1.1 }}
          >
            Register NGO
          </motion.a>
        </div>
        <div className="mt-12 text-center">
          <h1 className="text-4xl font-extrabold text-green-800">Your Small Donation Can Create a Big Change</h1>
          <p className="mt-4 text-gray-700 text-lg">Join thousands of donors making the world a better place.</p>
          <div className="mt-8 flex justify-center space-x-4">
            <motion.a
              href="/donate"
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700"
              whileHover={{ scale: 1.1 }}
            >
              Donate Now
            </motion.a>
            <motion.a
              href="/register-ngo"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
              whileHover={{ scale: 1.1 }}
            >
              Register NGO
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;