import { MainFooter } from '@/layout/MainLayout/MainFooter/MainFooter';
import { MainHeader } from '@/layout/MainLayout/MainHeader/MainHeader';

import styles from '@/layout/MainLayout/MainLayout.module.scss';

export const MainLayout = props => {
  const { children } = props;
  return (
    <div className={styles.mainLayout}>
      <MainHeader />
      <main className={styles.main}>{children}</main>
      <MainFooter />
    </div>
  );
};
