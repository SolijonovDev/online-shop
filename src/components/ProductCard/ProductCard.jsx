import { useProductCard } from './useProductCard';

import { Button } from '@/components/Button';
import { Card, CardImage, CardTitle } from '@/components/Card';
import styles from '@/components/ProductCard/ProductCard.module.scss';

export const ProductCard = props => {
  const { product = {} } = props;
  const { image, title, rating, price, id } = product;

  const { handleClick, handleClickMonthlyPayment, handleClickPurchase } = useProductCard({
    id,
    title,
    price,
  });

  return (
    <Card className={styles.productCard} onClick={handleClick}>
      <CardImage aspectRatio={55} src={image} alt="Product image"></CardImage>
      <div className={styles.body}>
        <CardTitle>{title}</CardTitle>
        <CardTitle>{price}</CardTitle>
        <CardTitle>{rating}</CardTitle>
      </div>
      <div className={styles.btns}>
        <Button color="secondary" onClick={handleClickMonthlyPayment}>
          Rassrochka
        </Button>
        <Button onClick={handleClickPurchase}>Kupit v 1 klik</Button>
      </div>
    </Card>
  );
};
