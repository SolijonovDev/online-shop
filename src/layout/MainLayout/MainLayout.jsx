import { MobileNav } from './MobileNav';
import { useMediaQuery } from '@/context/MediaQueryProvider';
import { MainFooter } from '@/layout/MainLayout/MainFooter/MainFooter';
import { MainHeader } from '@/layout/MainLayout/MainHeader/MainHeader';
import { MonthlyPaymentProvider } from '@/layout/MainLayout/MonthlyPayment/MonthlyPaymentProvider';
import { SearchBar } from '@/layout/MainLayout/SearchBar';

import { Container } from '@/components/Container';

import styles from '@/layout/MainLayout/MainLayout.module.scss';

export const MainLayout = props => {
  const { children } = props;
  const { matches } = useMediaQuery();

  return (
    <div className={styles.mainLayout}>
      <MainHeader />
      {!matches && (
        <Container>
          <SearchBar />
        </Container>
      )}

      {!matches && <MobileNav />}

      <MonthlyPaymentProvider>
        <main className={styles.main}>{children}</main>
      </MonthlyPaymentProvider>
      {/* <MainFooter /> */}
    </div>
  );
};
