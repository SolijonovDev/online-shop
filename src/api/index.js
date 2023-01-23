import { headersRequestInterceptor } from '@/api/interceptors/header-interceptor';
import axios from 'axios';

export const $api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10 * 1000,
});

headersRequestInterceptor($api);
