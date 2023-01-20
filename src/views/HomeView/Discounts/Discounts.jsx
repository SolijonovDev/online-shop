import styles from '@/views/HomeView/Discounts/Discounts.module.scss';

const url =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIgnBXBkXtvavBaUZYrWwS0m4-62karYieA&usqp=CAU';

export const Discounts = () => {
  return (
    <div className={styles.discounts}>
      <div className={styles.imageContainer}>
        <img src={url} alt="discount image" />
      </div>
    </div>
  );
};
