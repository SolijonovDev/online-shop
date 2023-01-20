import Link from 'next/link';

import { Heading } from '@/components/Heading';

import styles from '@/layout/MainLayout/MainFooter/FooterLinks.module.scss';

export const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      {[1, 2, 3].map(item => (
        <div key={item} className={styles.linkCol}>
          <Heading className={styles.title}>Информация</Heading>
          <Link href="/" className={styles.link}>
            Условия рассрочки
          </Link>
          <Link href="/" className={styles.link}>
            Оплата и доставка товара
          </Link>
          <Link href="/" className={styles.link}>
            О нас
          </Link>
        </div>
      ))}
    </div>
  );
};
