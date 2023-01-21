import { useSidebar } from '@/views/HomeView/Sidebar/useSidebar';

import { ProductModule } from '@/views/HomeView/Sidebar/ProductModule/ProductModule';
import styles from '@/views/HomeView/Sidebar/Sidebar.module.scss';

export const Sidebar = () => {
  const { modules } = useSidebar();

  return (
    <div className={styles.sidebar}>
      {modules.map(module => (
        <ProductModule key={module.id} module={module} />
      ))}
    </div>
  );
};
