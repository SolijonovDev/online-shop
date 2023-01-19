import { appWithTranslation } from 'next-i18next';
import { Fragment, useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

import { MainLayout } from '@/layout/MainLayout/MainLayout';

import '@/styles/main.scss';

const App = ({ Component, pageProps }) => {
  const queryClient = useRef();
  if (!queryClient.current) {
    queryClient.current = new QueryClient();
  }

  return (
    <Fragment>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydrated}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
          {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
        </Hydrate>
      </QueryClientProvider>
    </Fragment>
  );
};

export default appWithTranslation(App);
