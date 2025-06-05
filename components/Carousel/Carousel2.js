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
export default function Carousel2() {
    const slides = [
        {
            name: 'Slide 1',
            shape: Circle,
        },
        {
            name: 'Slide 1',
            shape: Trapziod,
        },
        {
            name: 'Slide 1',
            shape: Square,
        },
        {
            name: 'Slide 1',
            shape: Rombus,
        },
        {
            name: 'Slide 1',
            shape: Triangle,
        },
    ];

    return (
        <div className=' relative w-[90%] flex flex-col justify-center items-center '>
            <p className=' absolute z-10 border border-black w-full h-full '>
                <Image src={ButterFly} width={100} height={100} alt='Butter-Fly'  />
            </p>
            <Swiper
                modules={[ Navigation, Autoplay]}
                spaceBetween={10}
                slidesPerView={3}
                autoplay={{
                    delay: 3000
                }}
                loop={true}
                className=' w-[90vw] overflow-hidden h-[50vh] flex justify-center items-center  '
            >
                {
                    slides.map((item,index)=>(
                        <SwiperSlide key={index} className=' w-full  h-full ' >
                            {item.shape}
                        </SwiperSlide>
                    ))
                }
                
            </Swiper>
        </div>
    )
}
