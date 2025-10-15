import React from 'react';

const Marketplace = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 text-center">Marketplace</h1>
      <p className="mt-2 text-center text-gray-600">Explore eco-friendly products made from recycled items.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <img src="/assets/sample-product.jpg" alt="Product" className="w-full h-40 object-cover rounded" />
          <h2 className="mt-4 text-lg font-bold">Recycled Tote Bag</h2>
          <p className="text-gray-600">Made from 100% recycled materials.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Buy Now</button>
        </div>
        {/* Add more product cards here */}
      </div>
    </div>
  );
};

export default Marketplace;