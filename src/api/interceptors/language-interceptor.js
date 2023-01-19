export const languageInterceptor = (axiosInstance, language) => {
  axiosInstance.defaults.headers['iLanguage'] = language;

  return axiosInstance;
};
