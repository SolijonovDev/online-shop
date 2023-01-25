import { MainFooter } from '@/layout/MainLayout/MainFooter/MainFooter';
import { MainHeader } from '@/layout/MainLayout/MainHeader/MainHeader';
import { MonthlyPaymentProvider } from '@/layout/MainLayout/MonthlyPayment/MonthlyPaymentProvider';

import styles from '@/layout/MainLayout/MainLayout.module.scss';

export const MainLayout = props => {
  const { children } = props;
  return (
    <div className={styles.mainLayout}>
      <MainHeader />
      <MonthlyPaymentProvider>
        <main className={styles.main}>{children}</main>
      </MonthlyPaymentProvider>
      <MainFooter />
    </div>
  );
};
