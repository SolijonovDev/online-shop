import { useRouter } from 'next/router';

import { Button } from '@/components/Button';
import { Card, CardImage, CardTitle } from '@/components/Card';
import styles from '@/components/ProductCard/ProductCard.module.scss';

export const ProductCard = props => {
  const { product } = props;
  const { image, title, rating, price, id } = product;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/product-details/${id}`);
  };

  const handleClickRass = e => {
    e.stopPropagation();
  };

  return (
    <Card className={styles.productCard} onClick={handleClick}>
      <CardImage aspectRatio={55} src={image} alt="Product image"></CardImage>
      <div className={styles.body}>
        <CardTitle>{title}</CardTitle>
        <CardTitle>{price}</CardTitle>
        <CardTitle>{rating}</CardTitle>
      </div>
      <div className={styles.btns}>
        <Button color="secondary" onClick={handleClickRass}>
          Rassrochka
        </Button>
        <Button onClick={handleClickRass}>Kupit v 1 klik</Button>
      </div>
    </Card>
  );
};
