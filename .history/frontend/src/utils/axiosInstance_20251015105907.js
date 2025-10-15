import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://edonation-drive-backend.onrender.com/api', // Update with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;