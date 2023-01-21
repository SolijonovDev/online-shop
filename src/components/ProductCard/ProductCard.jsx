import { Card, CardImage, CardTitle } from '@/components/Card';
import styles from '@/components/ProductCard/ProductCard.module.scss';

export const ProductCard = () => {
  return (
    <Card>
      <CardImage aspectRatio={40}></CardImage>
      <CardTitle>Product Card</CardTitle>
    </Card>
  );
};
