import { appWithTranslation } from 'next-i18next';
import { Fragment, useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

import { MediaQueryProvider } from '@/context/MediaQueryProvider';
import { MainLayout } from '@/layout/MainLayout';

// import { AuthLayout } from '@/layout/AuthLayout';
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
          <MediaQueryProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </MediaQueryProvider>
          {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
        </Hydrate>
      </QueryClientProvider>
    </Fragment>
  );
};

export default appWithTranslation(App);
