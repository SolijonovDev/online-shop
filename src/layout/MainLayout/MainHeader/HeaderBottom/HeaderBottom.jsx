import Link from 'next/link';

import { HeaderLink } from './HeaderLink';

import { Container } from '@/components/Container';

import styles from '@/layout/MainLayout/MainHeader/HeaderBottom/HeaderBottom.module.scss';

export const HeaderBottom = () => {
  return (
    <div>
      <Container>
        <div className={styles.menu}>
          <HeaderLink href="/">Open categories</HeaderLink>
          <HeaderLink href="/">News</HeaderLink>
          <HeaderLink href="/">New products</HeaderLink>
          <HeaderLink href="/">Discounts</HeaderLink>
        </div>
      </Container>
    </div>
  );
};
