import axios from 'axios';
const BASE_URL = 'https://familyfarm.co.kr';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

