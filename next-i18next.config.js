// @ts-check

/**
 */
// module.exports = {
//   // https://www.i18next.com/overview/configuration-options#logging
//   debug: process.env.NODE_ENV === 'development',
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en', 'de'],
//   },
//   /** To avoid issues when deploying to some paas (vercel...) */
//   localePath:
//     typeof window === 'undefined'
//       ? require('path').resolve('./public/locales')
//       : '/locales',

//   reloadOnPrerender: process.env.NODE_ENV === 'development',

//   /**
//    * @link https://github.com/i18next/next-i18next#6-advanced-configuration
//    */
//   // saveMissing: false,
//   // strictMode: true,
//   // serializeConfig: false,
//   // react: { useSuspense: false }
// }

module.exports.LOCALE_RU = 'ru';
module.exports.LOCALE_UZ = 'uz';
module.exports.LOCALE_EN = 'en';

module.exports.LOCALES = [
  module.exports.LOCALE_RU,
  module.exports.LOCALE_UZ,
  module.exports.LOCALE_EN,
];

module.exports.i18n = {
  defaultLocale: module.exports.LOCALE_RU,
  locales: module.exports.LOCALES,
  localeDetection: false,
  reloadOnPrerender: process.env.NODE_ENV !== 'production',
};
