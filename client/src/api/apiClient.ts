import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
