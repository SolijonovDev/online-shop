import { Fragment } from 'react';

import styles from '@/layout/MainLayout/MainLayout.module.scss';

export const MainLayout = props => {
  const { children } = props;
  return (
    <Fragment>
      <div>
        <h2>Main layout</h2>
        {children}
      </div>
    </Fragment>
  );
};
