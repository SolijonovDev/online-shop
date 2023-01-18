import { Fragment } from 'react';

import { MainHeader } from './MainHeader/MainHeader';

import styles from '@/layout/MainLayout/MainLayout.module.scss';

export const MainLayout = props => {
  const { children } = props;
  return (
    <Fragment>
      <div>
        <MainHeader />
        <h2>Main layout</h2>
        {children}
      </div>
    </Fragment>
  );
};
