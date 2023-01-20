import Link from 'next/link';

import { Typography } from '@/components/Typography';

import styles from '@/layout/MainLayout/MainFooter/FeaturesList.module.scss';

export const FeaturesList = () => {
  return (
    <div className={styles.featuresList}>
      {[1, 2, 3, 4].map(feature => (
        <Link key={feature} href="/" className={styles.featureItem}>
          <div className={styles.featureImg}>
            <img src="	https://asaxiy.uz/custom-assets/images/icons/market.svg" />
          </div>
          <div className={styles.featureText}>
            <Typography>Delivery</Typography>
            <Typography>Our servis</Typography>
          </div>
        </Link>
      ))}
    </div>
  );
};
