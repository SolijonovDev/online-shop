import { headersRequestInterceptor } from '@/api/interceptors/header-interceptor';
import axios from 'axios';

export const $api = axios.create({
  baseURL: 'http://localhost:4200/api/',
  timeout: 10 * 1000,
});

headersRequestInterceptor($api);
