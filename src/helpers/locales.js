import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { $api } from '@/api';
import { languageInterceptor } from '@/api/interceptors/language-interceptor';

export const defaultGetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const pathsWithLocales = (getStaticPaths = defaultGetStaticPaths) => {
  return async context => {
    const { locales } = context;
    const { paths: originalPaths, ...rest } = await getStaticPaths(context);

    let paths = [];
    for (const locale of locales) {
      for (const originalPath of originalPaths) {
        paths.push({ ...originalPath, locale });
      }
    }

    return { ...rest, paths };
  };
};

const defaultNames = ['common', 'auth'];

export const propsWithLocales = (localeNamespaces = null, dataFetcher) => {
  return async context => {
    languageInterceptor($api, context.locale);

    let result = null;
    if (dataFetcher) {
      result = await dataFetcher(context);
    }

    let namespaces = defaultNames;
    if (Array.isArray(localeNamespaces)) {
      namespaces = Array.from(new Set([...defaultNames, ...localeNamespaces]));
    }

    const translationsProps = await serverSideTranslations(context.locale, namespaces);
    return {
      ...result,
      props: {
        ...result?.props,
        ...translationsProps,
      },
    };
  };
};
