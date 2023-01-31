import { Fragment } from 'react';

import { propsWithLocales } from '@/helpers/locales';

export const getStaticProps = propsWithLocales(null);

const NewsPage = () => {
  return (
    <Fragment>
      <h2>News page</h2>
    </Fragment>
  );
};

export default NewsPage;
