import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineAppstore } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';

import styles from '@/layout/MainLayout/MobileNav/MobileNav.module.scss';

export const MobileNav = () => {
  return (
    <div className={styles.mobileNav}>
      <div className={styles.contain}>
        <div className={styles.navItem}>
          <AiOutlineHome />
          <span>Home</span>
        </div>
        <div className={styles.navItem}>
          <AiOutlineAppstore />
          <span>Catalog</span>
        </div>

        <div className={styles.navItem}>
          <SlBasket />
          <span>Basket</span>
        </div>
        <div className={styles.navItem}>
          <FaRegUser />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};
