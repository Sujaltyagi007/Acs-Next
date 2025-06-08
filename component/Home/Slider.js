import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Slider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={{Pagination}}
      className=" flex justify-center items-center h-dvh w-full"
    >
      <SwiperSlide className=" border ">
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
}
