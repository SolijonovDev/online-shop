import { Container } from '@/components/Container';
import { CharacteristicContent } from '@/views/ProductDetailsView/CharacteristicContent/CharacteristicContent';
import { MoreAbout } from '@/views/ProductDetailsView/MoreAbout/MoreAbout';
import styles from '@/views/ProductDetailsView/ProductDetailsView.module.scss';

export const ProductDetailsView = () => {
  return (
    <div className={styles.productDetailsView}>
     <Container>
     <MoreAbout />
      <CharacteristicContent />
     </Container>
    </div>
  );
};
