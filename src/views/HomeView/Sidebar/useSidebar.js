import { useQuery } from 'react-query';

import { HomeApi } from '@/api/domains/home-api';

export const useSidebar = () => {
  const { data: modules } = useQuery(['home-selections'], HomeApi.fetchSelections, {
    staleTime: Infinity,
  });

  return { modules };
};
