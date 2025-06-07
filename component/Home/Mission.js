'use client'
import React,{useRef} from 'react'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Owl from '@/Assets/Home/Demo/owl.png'
import Cloud from '@/Assets/Home/cloud-2.png'
import Fish from '@/Assets/Home/Illustrates/fish.png'

export default function Mission() {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "end start"]
        }
    )
    const translate = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -500],
        { clamp: false }
    )

    return (
        <section ref={ref} className=' bg-white'>
            <div className="container relative overflow-hidden mx-auto px-4 py-16 gap-4 h-[50vh]  flex flex-col justify-center items-center lg:flex-row  ">
                <motion.div
                    style={{
                        translateX: translate,
                    }}
                    className="absolute -right-20 top-10  ">
                    <Image src={Fish} width={200} height={200} alt="Apna Chhota School" className='w-20 lg:w-48 h-20 lg:h-48 opacity-75 ' />
                </motion.div>
                <div className="w-full lg:w-1/3 flex lg:justify-center">
                    <h2 className='text-5xl lg:text-6xl font-extrabold '><span className=' lg:text-7xl text-orange-300'>
                        <span className='relative'>
                        <Image src={Owl} width={200} height={200} alt='owl image' className='absolute top-2 scale-150 -translate-y-[100%] ' />O</span>ur</span> <br /> Mission
                    </h2>
                </div>
                <div className="w-full lg:w-2/3 lg:p-4">
                    <p className='line-clamp-6 lg:line-clamp-4 text-sm lg:text-base'>
                        At <strong>Apna Chhota School</strong>, our mission is to bridge the gap in education for underserved communities by providing a nurturing and inclusive environment where every child can thrive. We believe that education is the key to breaking the cycle of poverty and empowering children to <strong>dream big</strong>, think creatively, and build a <strong>brighter future</strong>. Through innovative teaching methods, holistic development programs, and unwavering community support, we aim to unlock the potential of every young mind and pave the way for a more equitable and compassionate world.
                    </p>
                </div>
            </div>
            <div>
            <Image src={Cloud} width={1400} height={100} alt='apna chhota school' className=' absolute z-10 rotate-180 -translate-y-20  ' />
            </div>
        </section>
    )
}

