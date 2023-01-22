import { Fragment } from 'react';
import { QueryClient, dehydrate } from 'react-query';

import { pathsWithLocales, propsWithLocales } from '@/helpers/locales';

import { ProductDetailsView } from '@/views/ProductDetailsView';
import { ProductApi } from './../../api/domains/product-api';

export const getStaticPaths = pathsWithLocales();

export const getStaticProps = propsWithLocales(null, async context => {
  const { productId } = context.params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['product-details', productId], () => ProductApi.fetchProduct(productId));

  return {
    props: {
      dehydrated: dehydrate(queryClient),
    },
    revalidate: 3000,
  };
});

const ProductDetailsPage = () => {
  return (
    <Fragment>
      <ProductDetailsView />
    </Fragment>
  );
};

export default ProductDetailsPage;
