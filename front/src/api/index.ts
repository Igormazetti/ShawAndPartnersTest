import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-zp06.onrender.com/users',
});
