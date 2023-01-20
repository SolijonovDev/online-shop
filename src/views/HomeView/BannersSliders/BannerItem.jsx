import styles from '@/views/HomeView/BannersSliders/BannerItem.module.scss';

export const BannerItem = props => {
  const { banner } = props;
  const { src } = banner;
  return <div className={styles.banner} style={{ backgroundImage: `url(${src})` }} />;
};
