import { ToggleDrawer } from './ToggleDrawer';

import { Logo } from '@/components/Logo';

import styles from './MobileMenu.module.scss';

export const MobileMenu = () => {
  return (
    <div className={styles.mobileMenu}>
      <div className={styles.top}>
        <ToggleDrawer />
        <Logo size="small" />
      </div>
    </div>
  );
};
