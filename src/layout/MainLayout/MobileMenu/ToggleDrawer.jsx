import { useState, Fragment } from 'react';

import { Drawer } from './Drawer';

import { Portal } from '@/components/Portal';

import styles from '@/layout/MainLayout/MobileMenu/ToggleDrawer.module.scss';

export const ToggleDrawer = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => setIsDrawerVisible(true);
  const hideDrawer = () => setIsDrawerVisible(false);

  return (
    <Fragment>
      <div onClick={showDrawer} className={styles.hamburgerInner}>
        <span className={styles.hamburgerItem} />
        <span className={styles.hamburgerItem} />
        <span className={styles.hamburgerItem} />
      </div>
      <Portal>{isDrawerVisible && <Drawer hideDrawer={hideDrawer} />}</Portal>
    </Fragment>
  );
};
