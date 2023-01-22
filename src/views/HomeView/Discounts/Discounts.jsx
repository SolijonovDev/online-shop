import styles from '@/views/HomeView/Discounts/Discounts.module.scss';

const url = 'https://assets.asaxiy.uz/uploads/toptoday/mobile/63cba364f2606.jpg';

export const Discounts = () => {
  return (
    <div className={styles.discounts}>
      <div className={styles.imageContainer}>
        <img src={url} alt="discount image" />
      </div>
    </div>
  );
};
