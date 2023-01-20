import { FeaturesList } from '@/layout/MainLayout/MainFooter/FeaturesList';
import { FooterLinks } from '@/layout/MainLayout/MainFooter/FooterLinks';

import { Container } from '@/components/Container';
import { Typography } from '@/components/Typography';

import styles from '@/layout/MainLayout/MainFooter/MainFooter.module.scss';

export const MainFooter = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <FeaturesList />
          <FooterLinks />
          <Typography className={styles.text}>
            2015-2022 Интернет-магазин asaxiy.uz: Бытовая техника и др. Доставка товаров
            осуществляется во все регионы. Все права защищены.
          </Typography>
        </div>
      </Container>
    </footer>
  );
};
