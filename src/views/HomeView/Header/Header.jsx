import { BannersSliders } from '@/views/HomeView/BannersSliders/BannersSliders';
import { Discounts } from '@/views/HomeView/Discounts/Discounts';
import styles from '@/views/HomeView/Header/Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <BannersSliders />
      <Discounts />
    </div>
  );
};
