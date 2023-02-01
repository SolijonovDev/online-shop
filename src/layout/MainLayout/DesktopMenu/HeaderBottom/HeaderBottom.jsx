import { useTranslation } from 'next-i18next';

import { HeaderLink } from './HeaderLink';
import { headerMenu } from '@/layout/MainLayout/config';

import styles from '@/layout/MainLayout/DesktopMenu/HeaderBottom/HeaderBottom.module.scss';

export const HeaderBottom = () => {
  const { t } = useTranslation('header');
  return (
    <div className={styles.menu}>
      <div className={styles.openMenu}>Toggle menu</div>
      {headerMenu.map(({ id, localeKey, href }) => (
        <HeaderLink href={href} key={id} className={styles.link}>
          {t(localeKey)}
        </HeaderLink>
      ))}
    </div>
  );
};
