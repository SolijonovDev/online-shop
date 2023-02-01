import { LanguageDropDown } from '@/layout/MainLayout/DesktopMenu/HeaderTop/LanguageDropDown';
import { SearchBar } from '@/layout/MainLayout/SearchBar';

import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';

import styles from '@/layout/MainLayout/DesktopMenu/HeaderTop/HeaderTop.module.scss';

export const HeaderTop = () => {
  return (
    <div className={styles.headerTop}>
      <Logo />
      <SearchBar className={styles.searchBar} />
      <LanguageDropDown />
      <Button>Kirish</Button>
    </div>
  );
};
