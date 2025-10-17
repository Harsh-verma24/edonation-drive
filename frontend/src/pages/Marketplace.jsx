import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await axiosInstance.get('/products');
        setProducts(res.data || []);
      } catch (err) {
        console.error('Failed to fetch products:', err.response || err.message);
        const msg = err.response?.data?.error || err.response?.data || err.message;
        setError(String(msg));
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

          {products.map((p) => {
            const priceNum = Number(p?.price);
            const priceDisplay = Number.isFinite(priceNum) ? `$${priceNum.toFixed(2)}` : '—';
            const imgSrc = p?.imageUrl || '/Hero-1.jpg';
            return (
              <div key={p._id || p.id} className="bg-white p-4 rounded-lg shadow">
                <img src={imgSrc} alt={p?.name || 'Product'} className="w-full h-40 object-cover rounded" />
                <h2 className="mt-4 text-lg font-bold">{p?.name || 'Unnamed product'}</h2>
                <p className="text-gray-600">{p?.description || ''}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-green-700 font-bold">{priceDisplay}</div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Buy Now</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Marketplace;