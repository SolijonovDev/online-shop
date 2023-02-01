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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorem aliquam
            aliquid vero, voluptatem distinctio veniam. Fugiat vitae culpa itaque, sit quos impedit
            corrupti cum in atque porro veniam, ea optio nulla debitis, amet ab! Dolores
            perspiciatis voluptates molestiae soluta doloribus reprehenderit nostrum corporis nam
            laboriosam nulla est libero, animi dolorum architecto cupiditate in iste tempore quos
            dolorem. Placeat non dolorem, eum pariatur nisi deleniti excepturi incidunt dolore unde
            autem possimus iure perferendis ab impedit architecto maiores quos voluptatum
            laudantium?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorem aliquam
            aliquid vero, voluptatem distinctio veniam. Fugiat vitae culpa itaque, sit quos impedit
            corrupti cum in atque porro veniam, ea optio nulla debitis, amet ab! Dolores
            perspiciatis voluptates molestiae soluta doloribus reprehenderit nostrum corporis nam
            laboriosam nulla est libero, animi dolorum architecto cupiditate in iste tempore quos
            dolorem. Placeat non dolorem, eum pariatur nisi deleniti excepturi incidunt dolore unde
            autem possimus iure perferendis ab impedit architecto maiores quos voluptatum
            laudantium?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorem aliquam
            aliquid vero, voluptatem distinctio veniam. Fugiat vitae culpa itaque, sit quos impedit
            corrupti cum in atque porro veniam, ea optio nulla debitis, amet ab! Dolores
            perspiciatis voluptates molestiae soluta doloribus reprehenderit nostrum corporis nam
            laboriosam nulla est libero, animi dolorum architecto cupiditate in iste tempore quos
            dolorem. Placeat non dolorem, eum pariatur nisi deleniti excepturi incidunt dolore unde
            autem possimus iure perferendis ab impedit architecto maiores quos voluptatum
            laudantium?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorem aliquam
            aliquid vero, voluptatem distinctio veniam. Fugiat vitae culpa itaque, sit quos impedit
            corrupti cum in atque porro veniam, ea optio nulla debitis, amet ab! Dolores
            perspiciatis voluptates molestiae soluta doloribus reprehenderit nostrum corporis nam
            laboriosam nulla est libero, animi dolorum architecto cupiditate in iste tempore quos
            dolorem. Placeat non dolorem, eum pariatur nisi deleniti excepturi incidunt dolore unde
            autem possimus iure perferendis ab impedit architecto maiores quos voluptatum
            laudantium?
          </p>
        </div>
      </Container>
    </div>
  );
};
