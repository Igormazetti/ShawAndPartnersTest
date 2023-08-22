import axios from 'axios';

export const api = axios.create({
  // baseURL: 'https://api-zp06.onrender.com/users',
  baseURL: 'http://localhost:4000/users',
});
