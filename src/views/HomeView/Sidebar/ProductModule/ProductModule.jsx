import { Heading } from '@/components/Heading';
import { ProductCard } from '@/components/ProductCard';

import styles from '@/views/HomeView/Sidebar/ProductModule/ProductModule.module.scss';

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

export const ProductModule = props => {
  const { module } = props;
  const { title } = module;

  return (
    <div className={styles.productModule}>
      <Heading className={styles.title}>{title}</Heading>
      <div className={styles.products}>
        {arr.map(item => (
          <ProductCard key={item} />
        ))}
      </div>
    </div>
  );
};