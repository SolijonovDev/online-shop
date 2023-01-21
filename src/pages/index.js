import { Fragment } from 'react';
import { QueryClient, dehydrate } from 'react-query';

import { HomeApi } from '@/api/domains/home-api';
import { propsWithLocales } from '@/helpers/locales';

import { HomeView } from '@/views/HomeView';

export const getStaticProps = propsWithLocales(null, async context => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['home-banners'], HomeApi.fetchBanners);
  await queryClient.prefetchQuery(['home-selections'], HomeApi.fetchSelections);

  return {
    props: {
      dehydrated: dehydrate(queryClient),
    },
    revalidate: 1200,
  };
});

const HomePage = () => {
  return (
    <Fragment>
      <HomeView />
    </Fragment>
  );
};

export default HomePage;
