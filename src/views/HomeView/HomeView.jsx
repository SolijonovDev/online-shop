import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

import { Aside } from '@/views/HomeView/Aside/Aside';
import { Header } from '@/views/HomeView/Header/Header';
import styles from '@/views/HomeView/HomeView.module.scss';
import { Sidebar } from '@/views/HomeView/Sidebar/Sidebar';
import {useGeolocation} from 'react-use';
export const HomeView = () => {
  const state = useGeolocation();
  return (
    <div className={styles.homeView}>
      <Container>
        <Header />
        <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
        <div className={styles.sections}>
          <Aside />
          <Sidebar />
        </div>
      </Container>
    </div>
  );
};
