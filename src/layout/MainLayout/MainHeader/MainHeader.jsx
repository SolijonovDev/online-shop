import Link from 'next/link';

import { LanguagePanel } from '@/layout/MainLayout/MainHeader/LanguagePanel';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';

import styles from '@/layout/MainLayout/MainHeader/MainHeader.module.scss';

export const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Logo />
          <LanguagePanel />
          <Button>Kirish</Button>
        </div>
        <div className={styles.menu}>
          <Link href="/">Open categories</Link>
          <Link href="/">News</Link>
          <Link href="/">New products</Link>
          <Link href="/">Discounts</Link>
        </div>
      </Container>
    </header>
  );
};
