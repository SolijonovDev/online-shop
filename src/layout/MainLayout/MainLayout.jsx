import { Fragment } from 'react';

import { MainHeader } from '@/layout/MainLayout/MainHeader/MainHeader';

import { Container } from '@/components/Container';

import styles from '@/layout/MainLayout/MainLayout.module.scss';

export const MainLayout = props => {
  const { children } = props;
  return (
    <Fragment>
      <div>
        <MainHeader />
        <h2>Main layout</h2>
        <Container>{children}</Container>
      </div>
    </Fragment>
  );
};
