'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Starfish from '@/Assets/Home/Illustrates/starfish.png'
import ImageCard from '@/components/Card/ImageCard'
import Activity1 from '@/Assets/Home/images/republic.jpg'
import Activity2 from '@/Assets/Home/images/Activity2.jpg'
import Activity3 from '@/Assets/Home/images/Activity3.jpg'
import Activity4 from '@/Assets/Home/images/Activity4.jpg'
import Bg1 from '@/Assets/Home/BackGround/BackGround1.png'
import Bg2 from '@/Assets/Home/BackGround/Background2.png'
import Snale from '@/Assets/Home/Demo/Snale.png'


export default function Activity() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 600])
    const Activities = [
        { bgImage: Activity1, title: "Celebrating Republic Day", Img: Bg1 },
        { bgImage: Activity2, title: "Celebrating janmashtami Day", style: "lg:mt-16 mt-0", Img: Bg2 },
        { bgImage: Activity3, title: "Celebrating Gandhi Jayanti", style: "lg:mt-16 mt-0", Img: Bg1 },
        { bgImage: Activity4, title: "Celebrating Dussehra Day", Img: Bg2 }
    ]

    return (
        <section ref={ref} className='relative overflow-hidden'>
            <motion.div
                style={{ x }}
                className="absolute top-20 2xl:-left-40 2xl:top-48 w-full h-full ">
                <Image className='w-20 h-20 lg:w-48 lg:h-48 opacity-70' src={Starfish} alt="Starfish" width={200} height={200} />
            </motion.div>
            <div className="title py-8 px-4">
                <h3 className=" text-4xl lg:text-5xl font-extrabold text-center">
                    Our Activities
                    <div className="w-1/12 m-auto mt-3 h-1 bg-primary rounded-full"></div>
                </h3>
                <div className="container m-auto flex justify-between py-16 flex-col lg:flex-row">
                    {Activities.map((activity, index) => (
                        <ImageCard
                            key={index}
                            Image={activity.bgImage}
                            Img={activity.Img}
                            title={activity.title}
                            style={activity.style}
                        />
                    ))}
                </div>
                <div className=' w-full flex justify-end' >
                    <Image src={Snale.src} width={600} height={200} alt='apna chhota school' className='' />
                </div>
            </div>
        </section>
    )
}
