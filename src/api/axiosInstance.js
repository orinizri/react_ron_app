import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Set your server's base URL here
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export default axiosInstance;