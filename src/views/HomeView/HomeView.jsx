import { useGeolocation } from 'react-use';

import { Container } from '@/components/Container';

import { Aside } from '@/views/HomeView/Aside/Aside';
import { Header } from '@/views/HomeView/Header/Header';
import styles from '@/views/HomeView/HomeView.module.scss';
import { Sidebar } from '@/views/HomeView/Sidebar/Sidebar';

export const HomeView = () => {
  const state = useGeolocation();

  return (
    <div className={styles.homeView}>
      <Container>
        <Header />
        <div className={styles.sections}>
          <Aside />
          <Sidebar />
        </div>
      </Container>
    </div>
  );
};
