import { appWithTranslation } from 'next-i18next';
import { Fragment } from 'react';

import { MainLayout } from '@/layout/MainLayout/MainLayout';
import '@/styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Fragment>
  );
};

export default appWithTranslation(App);
