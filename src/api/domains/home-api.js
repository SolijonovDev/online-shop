import { $api } from '@/api';

export const HomeApi = {
  fetchBanners: async () => {
    const { data } = await $api.get('home/banners');
    const { banners } = data;

    return banners;
  },
  fetchSelections: async () => {
    const { data } = await $api.get('home/selections');
    const { selections } = data;

    return selections;
  },
};
