import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:4000/users',

  // baseURL: process.env.NEXT_PUBLIC_API_URL,
});
