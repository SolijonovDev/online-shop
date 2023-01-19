import styles from '@/components/Container/Container.module.scss';

export const Container = props => {
  return <div className={styles.container} {...props} />;
};
