import { Heading } from '@/components/Heading';
import { ProductCard } from '@/components/ProductCard';

import styles from '@/views/HomeView/Sidebar/ProductModule/ProductModule.module.scss';

export const ProductModule = props => {
  const { module } = props;
  const { title, list } = module;

  return (
    <div className={styles.productModule}>
      <Heading className={styles.title}>{title}</Heading>
      <div className={styles.products}>
        {list.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
