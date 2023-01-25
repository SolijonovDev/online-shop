import { useQuery } from 'react-query';

import { HomeApi } from '@/api/domains/home-api';

const mls = [
  {
    title: 'New clothes',
    list: [
      {
        image: '',
        title: 'test',
        rating: '4',
        price: '400000',
        id: '32525',
      },
    ],
  },
];

export const useSidebar = () => {
  const { data: modules } = useQuery(['home-selections'], HomeApi.fetchSelections, {
    staleTime: Infinity,
  });

  return { modules: mls };
};
