import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../utils/axiosInstance.js';

const Donate = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('itemType', data.itemType);
    formData.append('quantity', data.quantity);
    formData.append('dropLocation', data.dropLocation);
    if (data.createProduct) {
      formData.append('createProduct', 'true');
      formData.append('productName', data.productName || data.itemType);
      formData.append('productDescription', data.productDescription || `Donated: ${data.itemType}`);
      formData.append('productPrice', data.productPrice || 0);
      formData.append('productStock', data.productStock || 1);
    }
    if (data.image && data.image[0]) {
      formData.append('image', data.image[0]);
    }

    try {
      setLoading(true);
      const response = await axiosInstance.post('/donations', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Donation response:', response.data);
      alert('Donation submitted successfully');
    } catch (error) {
      // Log full axios error info to help debugging
      console.error('Axios error:', {
        message: error.message,
        code: error.code,
        responseData: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers,
      });

      const errMsg = error.response?.data?.error || error.response?.data || error.message;
      alert('Failed to submit donation: ' + JSON.stringify(errMsg));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-r from-green-100 to-blue-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-green-800 text-center">Donate Items</h1>
      <p className="mt-2 text-center text-gray-700">Fill out the form below to donate your reusable items and make a difference!</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block text-gray-800 font-medium">Item Type</label>
          <input {...register('itemType')} placeholder="e.g., Clothes, Bottles" className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-400" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-medium">Quantity</label>
          <input {...register('quantity')} placeholder="e.g., 10" type="number" className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-400" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-medium">Drop Location</label>
          <input {...register('dropLocation')} placeholder="e.g., City Center" className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-400" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-medium">Upload Image</label>
          <input {...register('image')} type="file" className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-400" />
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input {...register('createProduct')} type="checkbox" className="mr-2" />
            <span className="text-gray-800">Add this item to the marketplace</span>
          </label>
        </div>

        {/* Additional product fields shown optionally via UI would be better, but always include to keep form simple */}
        <div className="mb-6">
          <label className="block text-gray-800 font-medium">Product Price (optional)</label>
          <input {...register('productPrice')} placeholder="e.g., 12.99" type="number" step="0.01" className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-400" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-medium">Product Stock (optional)</label>
          <input {...register('productStock')} placeholder="e.g., 10" type="number" className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-400" />
        </div>
        <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-lg w-full hover:bg-green-700">Submit</button>
      </form>
    </div>
  );
};

export default Donate;