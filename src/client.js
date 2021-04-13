import axios from 'axios';
import { apiKey, baseURL } from '@/config';

export default axios.create({ baseURL });
