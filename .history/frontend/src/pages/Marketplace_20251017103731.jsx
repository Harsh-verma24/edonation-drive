import React from 'react';

const Marketplace = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 text-center">Marketplace</h1>
      <p className="mt-2 text-center text-gray-600">Explore eco-friendly products made from recycled items.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product cards will be rendered here dynamically */}
      </div>
    </div>
  );
};

export default Marketplace;