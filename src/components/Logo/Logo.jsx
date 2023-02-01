import Link from 'next/link';

import cn from 'classnames';

import styles from '@/components/Logo/Logo.module.scss';

const src = 'https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg';

export const Logo = props => {
  const { size = 'medium' } = props;
  return (
    <Link href="/" className={cn(styles.logo, { [styles[size]]: size })}>
      <img src={src} alt="logo" />
    </Link>
  );
};
