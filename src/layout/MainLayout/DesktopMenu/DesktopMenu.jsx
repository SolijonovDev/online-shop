import { Fragment } from 'react';

import { HeaderBottom } from '@/layout/MainLayout/DesktopMenu/HeaderBottom/HeaderBottom';
import { HeaderTop } from '@/layout/MainLayout/DesktopMenu/HeaderTop/HeaderTop';

export const DesktopMenu = () => {
  return (
    <Fragment>
      <HeaderTop />
      <HeaderBottom />
    </Fragment>
  );
};
