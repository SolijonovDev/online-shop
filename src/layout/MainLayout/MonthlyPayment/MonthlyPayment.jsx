import { Button } from '@/components/Button';
import { Portal } from '@/components/Portal';

import styles from '@/layout/MainLayout/MonthlyPayment/MonthlyPayment.module.scss';

export const MonthlyPayment = props => {
  const { isOpen, handleClose } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={styles.shadow} />
      <div className={styles.dialog}>
        <div className={styles.anime}>
          <div className={styles.header}>
            <h4>Купить Принтер Xerox B310 (А4, лазерный, ч/б) в рассрочку</h4>
            <button onClick={handleClose}>Close</button>
          </div>
          <div className={styles.body}>
            <div className={styles.option}>
              <span className={styles.term}>3 месяц</span>
              <span className={styles.price}>1 725 800 сум</span>
            </div>
            <div className={styles.option}>
              <span className={styles.term}>3 месяц</span>
              <span className={styles.price}>1 725 800 сум</span>
            </div>
            <div className={styles.option}>
              <span className={styles.term}>3 месяц</span>
              <span className={styles.price}>1 725 800 сум</span>
            </div>
            <div className={styles.option}>
              <span className={styles.term}>3 месяц</span>
              <span className={styles.price}>1 725 800 сум</span>
            </div>
          </div>
          <div className={styles.total}>
            <span>Оставить заявку :</span>
            <div>
              <Button color="primary">Через BOT</Button>
              <Button color="secondary">Через Сайт</Button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
