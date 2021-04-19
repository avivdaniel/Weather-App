import axios from 'axios';
import { apiKey, baseURL } from '@/config';

axios.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});

export default axios.create({
  baseURL,
  headers: {"Access-Control-Allow-Origin": "*"}
});
