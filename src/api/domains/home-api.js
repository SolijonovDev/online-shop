import { $api } from '@/api';

const banner = {
  id: 1,
  src: 'https://www.shutterstock.com/image-illustration/electric-car-drive-on-wind-600w-1972202852.jpg',
};

// const banners = [banner, banner, banner, banner];

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
