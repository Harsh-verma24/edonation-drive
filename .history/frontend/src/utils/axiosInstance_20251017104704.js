import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api', // during local dev Vite proxies or same-origin can call the backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;