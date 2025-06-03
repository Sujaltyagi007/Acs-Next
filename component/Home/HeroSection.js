'use client'
import React, { useRef } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import HeroImage1 from '@/Assets/Home/HeroImage.jpg'
import HeroImage2 from '@/Assets/Home/HeroImage2.jpg'

const slides = [
    {
        title: 'Welcome to Apna Chhota School',
        description: 'Empowering Minds, Shaping Futures',
        background: HeroImage1,
        color: 'bg-pink-300',
        page: '/contact',
        buttonText: 'Enroll Now',
    },
    {
        title: '',
        description: '',
        background: HeroImage2,
        color: 'bg-pink-100',

    },
];
export default function HeroSection() {

    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };
    return (
        <div className=' aspect-square lg:aspect-[8/3] overflow-hidden'>
            {/* <Image src={Cloud} width={1400} height={200} alt='Apna chhota school' className=' absolute z-10 -translate-y-20 rotate-180 ' /> */}
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                effect="cube"
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                className="mySwiper relative "
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`flex items-center  lg:px-32 aspect-square md:aspect-[8/3] bg-cover lg:bg-center `}
                            style={{ backgroundImage: `url('${slide.background.src}')` }}
                        >
                            <div className=" lg:ml-32 text-white  w-full lg:w-1/2 h-full flex flex-col justify-center items-center  relative">
                                <div className='flex flex-col items-center justify-center'>
                                    <motion.h1
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        delay={0.2}
                                        className="text-3xl md:text-5xl  2xl:text-8xl  font-bold font-Lucky tracking-wider mb-4 lg:max-w-[800px] ">{slide.title}</motion.h1>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        delay={0.4}
                                        className="text-lg md:text-xl">
                                        {slide.description}
                                    </motion.p>
                                    {slide.page && (
                                        <Link
                                            href={slide.page}
                                            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
                                        >
                                            {slide.buttonText}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className=' swiper-button-prev absolute z-10 bg-blue-400 top-1/2 left-0 transform -translate-y-1/2 cursor-pointer ml-4  h-10 w-10 hover:bg-blue-500 rounded-full flex items-center justify-center hover:text-white transition-all duration-300 ' >
                <FaArrowLeft />
            </div>
            {/* <FaArrowLeft
                onClick={handlePrev}
                className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer ml-4  h-10 w-10 hover:bg-blue-500 rounded-full flex items-center justify-center bg-blue-200 hover:text-white transition-all duration-300"
            /> */}

            <FaArrowRight
                onClick={handleNext}
                className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer mr-4  h-10 w-10 hover:bg-blue-500 p-2 rounded-full flex items-center justify-center bg-blue-200 hover:text-white transition-all duration-300"
            />
        </div>
    )
}
