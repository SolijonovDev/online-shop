import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { ProductApi } from '@/api/domains/product-api';

export const useProductDetailsView = () => {
  const { query } = useRouter();
  const { productId } = query;

  const { data: product } = useQuery(['product-details', productId], () => ProductApi.fetchProduct(productId), {
    staleTime: Infinity,
  });

  return { product };
};
