import styles from './Drawer.module.scss';

export const Drawer = props => {
  const { hideDrawer } = props;
  return (
    <div className={styles.drawer}>
      <div className={styles.shadow} />
      <button className={styles.btn} onClick={hideDrawer}>
        Close
      </button>
    </div>
  );
};
