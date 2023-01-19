module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'uz',
    locales: ['en', 'ru', 'uz'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
