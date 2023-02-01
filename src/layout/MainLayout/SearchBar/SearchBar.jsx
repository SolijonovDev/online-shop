import { useTranslation } from 'next-i18next';

import cn from 'classnames';

import styles from '@/layout/MainLayout/SearchBar/SearchBar.module.scss';

export const SearchBar = props => {
  const { className } = props;
  const { t } = useTranslation('header');

  return (
    <div className={cn(styles.searchBar, { [className]: className })}>
      <input placeholder={t('search.placeholder')} />
      <button>
        <span>{t('search.btn')}</span>
      </button>
    </div>
  );
};
