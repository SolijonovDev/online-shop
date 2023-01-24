import Link from 'next/link';

import styles from '@/layout/MainLayout/MainHeader/HeaderBottom/HeaderLink.module.scss';

export const HeaderLink = props => {
  const { children, href } = props;
  return (
    <Link className={styles.headerLink} href={href}>
      {children}
    </Link>
  );
};
