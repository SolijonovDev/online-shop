import { useBannersSlider } from '@/views/HomeView/BannersSliders/useBannersSlider';

import { Swiper, SwiperSlide } from '@/components/Slider/Swiper';

import { BannerItem } from '@/views/HomeView/BannersSliders/BannerItem';
import styles from '@/views/HomeView/BannersSliders/BannersSliders.module.scss';

import 'swiper/css';

export const BannersSliders = () => {
  const { banners } = useBannersSlider();

  if (!banners || !banners.length) {
    return null;
  }

  return (
    <div className={styles.bannerSliderContainer}>
      <div className={styles.bannersSlider}>
        <Swiper
          loop
          wrapperTag="ul"
          autoplay={{
            delay: 1500,
          }}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
        >
          {banners.map(banner => (
            <SwiperSlide key={banner.id}>
              <BannerItem banner={banner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
