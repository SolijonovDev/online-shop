import { $api } from '@/api';

export const ProductApi = {
  fetchProduct: async (productId) => {
    const { data } = await $api.get(`products/${productId}`);
    const { product } = data;

    return product;
  }
};