import styles from '@/layout/MainLayout/MainHeader/HeaderTop/SearchPanel.module.scss';

export const SearchPanel = () => {
  return (
    <div className={styles.searchPanel}>
      <input />
      <button>
        <span>search</span>
      </button>
    </div>
  );
};
