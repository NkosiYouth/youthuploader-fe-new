import axios from 'axios';

const BASE_API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4001/api/';

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  config => {
    // Add authorization token if needed
    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export default axiosInstance;
