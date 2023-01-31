import styles from '@/layout/AuthLayout/AuthLayout.module.scss';

export const AuthLayout = props => {
  const { children } = props;
  return (
    <div className={styles.authLayout}>
      <header>Header</header>
      <main>{children}</main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
};
