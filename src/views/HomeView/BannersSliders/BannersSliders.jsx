import { useBannersSlider } from './useBannersSlider';

export const BannersSliders = () => {
  const { banners } = useBannersSlider();
  console.log('banners', banners);
  return (
    <div>
      <h2>Banners Sliders</h2>
    </div>
  );
};
