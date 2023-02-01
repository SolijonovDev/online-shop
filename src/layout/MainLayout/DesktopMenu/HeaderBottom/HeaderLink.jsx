import Link from 'next/link';

import cn from 'classnames';

import styles from '@/layout/MainLayout/DesktopMenu/HeaderBottom/HeaderLink.module.scss';

export const HeaderLink = props => {
  const { children, href, className } = props;
  return (
    <Link className={cn(styles.headerLink, className)} href={href}>
      {children}
    </Link>
  );
};
