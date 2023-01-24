import { LanguageDropDown } from '@/layout/MainLayout/MainHeader/HeaderTop/LanguageDropDown';
import { SearchPanel } from '@/layout/MainLayout/MainHeader/HeaderTop/SearchPanel';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';

import styles from '@/layout/MainLayout/MainHeader/HeaderTop/HeaderTop.module.scss';

export const HeaderTop = () => {
  return (
    <div className={styles.headerTop}>
      <Container>
        <div className={styles.content}>
          <Logo />
          <SearchPanel />
          <LanguageDropDown />
          <Button>Kirish</Button>
        </div>
      </Container>
    </div>
  );
};
