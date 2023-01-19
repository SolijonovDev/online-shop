import { useTranslation } from 'next-i18next';
import { Fragment } from 'react';

import { BannersSliders } from '@/views/HomeView/BannersSliders/BannersSliders';
import styles from '@/views/HomeView/HomeView.module.scss';

export const HomeView = () => {
  const { t } = useTranslation('common');
  return (
    <Fragment>
      <div>
        <BannersSliders />
        <h2>{t('title')}</h2>
        <p>{t('text')}</p>
        <h2>HomeView</h2>
      </div>
    </Fragment>
  );
};
