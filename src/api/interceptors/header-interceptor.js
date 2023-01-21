const headerRequest = config => {
  if (!config.headers) config.headers = {};

  config.headers['iTime'] = Date.now().toString();

  if (typeof window !== 'undefined') {
    config.headers['iAuth'] = true;
  }

  return config;
};

export const headersRequestInterceptor = axios => {
  axios.interceptors.request.use(headerRequest);
  return axios;
};
