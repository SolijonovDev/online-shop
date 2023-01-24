import { HeaderBottom } from '@/layout/MainLayout/MainHeader/HeaderBottom/HeaderBottom';
import { HeaderTop } from '@/layout/MainLayout/MainHeader/HeaderTop/HeaderTop';

import styles from '@/layout/MainLayout/MainHeader/MainHeader.module.scss';

export const MainHeader = () => {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};
