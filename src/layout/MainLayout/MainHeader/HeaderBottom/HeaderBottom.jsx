import { useTranslation } from 'next-i18next';

import { HeaderLink } from './HeaderLink';
import { headerMenu } from '@/layout/MainLayout/config';

import { Container } from '@/components/Container';

import styles from '@/layout/MainLayout/MainHeader/HeaderBottom/HeaderBottom.module.scss';

export const HeaderBottom = () => {
  const { t } = useTranslation('header');
  return (
    <div>
      <Container>
        <div className={styles.menu}>
        <div className={styles.openMenu}>
          Toggle menu
        </div>
          {headerMenu.map(({ id, localeKey, href }) => (
            <HeaderLink href={href} key={id} className={styles.link}>
              {t(localeKey)}
            </HeaderLink>
          ))}
        </div>
      </Container>
    </div>
  );
};
