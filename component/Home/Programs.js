import React from 'react'
import Carousel from '@/components/Carousel/Carousel1'
import { Bubblegum_Sans } from 'next/font/google'

const bubble = Bubblegum_Sans({
    subsets:['latin'],
    weight:['400']
})
export default function Programs() {
    return (
        <section className="relative h-[70vh] md:h-fit ">
            <div className="title md:py-8 py-2 px-4">
                <p className={` ${bubble.className} text-[14px] text-[#eb1551] text-center `}>Making a Difference</p>
                <h3 className=" text-4xl font-bold text-center">
                    Our Programs
                </h3>
            </div>
            <div className="py-8 lg:py-16 px-4 overflow-hidden">
                <Carousel />
            </div>
        </section>
    )
}
