import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import { Navigation } from "swiper/modules";
import { SwiperSlide, useSwiper, Swiper } from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigations from './CarouselRightNavigations'
import "swiper/css";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0, null);
  }, [data]);
  return <></>;
};

const Carousel = ({ data, renderComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        styles={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={40}
        allowTouchMove
      >
        <Controls />
        <CarouselLeftNavigation />
        <CarouselRightNavigations />
        {data.map((ele, ind) => {
          return <SwiperSlide key={ind}>{renderComponent(ele)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
