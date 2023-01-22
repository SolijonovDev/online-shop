import styles from '@/views/ProductDetailsView/MoreAbout/MoreAbout.module.scss';
import { useProductDetailsView } from '@/views/ProductDetailsView/useProductDetailsView';
import { Typography } from '@/components/Typography';

export const MoreAbout = () => {
  const {product} = useProductDetailsView();
  const {title,image,price,rating} = product;

  return (
    <div className={styles.moreAbout}>
      <div className={styles.image}>
        <img className={styles.photo} src={image} alt='product photo'/>
      </div>
      <div className={styles.info}>
     <Typography>{title}</Typography>
     <Typography>{rating}</Typography>
     <Typography>{price}</Typography>
      </div>
    </div>
  );
};
