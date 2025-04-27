import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';

const Slider = ({ sliderData }) => {
  const [getSlider, setGetSlider] = useState([]);

  useEffect(() => {
    setGetSlider(sliderData);
  }, [sliderData]);

  return (
    <div className="slider-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={14}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={2000}
        allowTouchMove={false}
      >
        {getSlider.map((val, index) => (
          <SwiperSlide key={index}>
            <img src={val} alt={`slide-${index}`} className="slider-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
