import React, { useEffect, useState } from 'react';

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 text-center">Marketplace</h1>
      <p className="mt-2 text-center text-gray-600">Explore eco-friendly products made from recycled items.</p>

      {loading && <div className="mt-6 text-center">Loading products...</div>}
      {error && <div className="mt-6 text-center text-red-500">{error}</div>}

      {!loading && !error && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length === 0 && (
            <div className="col-span-full text-center text-gray-600">No products available yet.</div>
          )}

          {products.map((p) => (
            <div key={p._id} className="bg-white p-4 rounded-lg shadow">
              <img src={p.imageUrl} alt={p.name} className="w-full h-40 object-cover rounded" />
              <h2 className="mt-4 text-lg font-bold">{p.name}</h2>
              <p className="text-gray-600">{p.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-green-700 font-bold">${p.price.toFixed(2)}</div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Marketplace;