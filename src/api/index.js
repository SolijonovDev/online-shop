import axios from 'axios';

export const httpClient = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10 * 1000,
});
