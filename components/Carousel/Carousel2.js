'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Circle from '@/components/Slider/Circle'
import Trapziod from '@/components/Slider/Trapziod'
import Square from '@/components/Slider/Square'
import Rombus from '@/components/Slider/Rombus'
import Triangle from '@/components/Slider/Triangle'
import Image from 'next/image';
import ButterFly from '@/components/Svg/Butterfly.svg'
import Slide1 from '@/components/Slider/Slide1.jpg'
import Slide2 from '@/components/Slider/Slide2.jpg'
import Slide3 from '@/components/Slider/Slide3.jpg'
import Slide4 from '@/components/Slider/Slide4.jpg'
import Slide5 from '@/components/Slider/Slide5.jpg'
export default function Carousel2() {
    const slides = [
        {
            name: 'Slide 1',
            shape: Circle,
            img: Slide1
        },
        {
            name: 'Slide 1',
            shape: Trapziod,
            img: Slide2
        },
        {
            name: 'Slide 1',
            shape: Square,
            img: Slide3
        },
        {
            name: 'Slide 1',
            shape: Rombus,
            img: Slide4
        },
        {
            name: 'Slide 1',
            shape: Triangle,
            img: Slide5
        },
    ];

    return (
        <div className=' relative w-full flex flex-col justify-center items-center '>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                autoplay={{
                    delay: 3000
                }}
                loop={true}
                className=' w-[90vw] overflow-hidden md:h-fit flex justify-center items-center  '
                breakpoints={{
                    320:{
                        slidesPerView:1
                    },
                    420:{
                        slidesPerView:2
                    },
                    720:{
                        slidesPerView:3
                    },
                    1920:{
                        slidesPerView:4
                    }
                }}
            >
                {
                    slides.map((item, index) => (
                        <SwiperSlide key={index} className=' w-full  h-full  ' >
                            {item.shape}
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}
