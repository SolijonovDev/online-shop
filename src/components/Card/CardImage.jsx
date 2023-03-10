import styles from '@/components/Card/CardImage.module.scss';

export const CardImage = props => {
  const { src, alt, aspectRatio, children } = props;
  return (
    <div
      style={{
        paddingBottom: `${aspectRatio}%`,
      }}
      className={styles.cardImage}
    >
      <div className={styles.photo}>
        <img src={src} alt={alt} />
      </div>
      {children}
    </div>
  );
};
