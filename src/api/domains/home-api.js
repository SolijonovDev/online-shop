const banner = {
  id: 1,
  src: 'https://www.shutterstock.com/image-illustration/electric-car-drive-on-wind-600w-1972202852.jpg',
};

const banners = [banner, banner, banner, banner];

export const HomeApi = {
  fetchBanners: async () => {
    return banners;
  },
};
