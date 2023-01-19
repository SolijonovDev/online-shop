import { useQuery } from 'react-query';

import { HomeApi } from '@/api/domains/home-api';

export const useBannersSlider = () => {
  const { data: banners } = useQuery(['home-banners'], HomeApi.fetchBanners, {
    staleTime: Infinity,
  });

  return { banners };
};
