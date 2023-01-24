import Link from 'next/link';

import styles from '@/components/Logo/Logo.module.scss';

const src = 'https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg';

export const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <img src={src} alt="logo" />
    </Link>
  );
};
