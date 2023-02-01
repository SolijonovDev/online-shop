import { useMediaQuery } from '@/context/MediaQueryProvider';
import { DesktopMenu } from '@/layout/MainLayout/DesktopMenu';
import { MobileMenu } from '@/layout/MainLayout/MobileMenu';

import { Container } from '@/components/Container';

import styles from '@/layout/MainLayout/MainHeader/MainHeader.module.scss';

export const MainHeader = () => {
  const { matches } = useMediaQuery();
  return (
    <header className={styles.header}>
      <Container>
        {matches && <DesktopMenu />}
        {!matches && <MobileMenu />}
      </Container>
    </header>
  );
};
