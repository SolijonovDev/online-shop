import { Fragment } from 'react';

import { HomeView } from '@/views/HomeView';
import { propsWithLocales } from '@/helpers/locales';

export const getStaticProps = propsWithLocales(null, async (context) => {

});



const HomePage = () => {
  return (
    <Fragment>
      <HomeView />
    </Fragment>
  );
};

export default HomePage;
