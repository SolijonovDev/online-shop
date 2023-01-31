import { Fragment } from 'react';

import { propsWithLocales } from '@/helpers/locales';

import { ProductsView } from '@/views/ProductsView';

export const getStaticProps = propsWithLocales(null);

const ProductsPage = () => {
  return (
    <Fragment>
      <ProductsView />
    </Fragment>
  );
};

export default ProductsPage;
