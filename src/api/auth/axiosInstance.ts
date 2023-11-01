import axios from 'axios';
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
