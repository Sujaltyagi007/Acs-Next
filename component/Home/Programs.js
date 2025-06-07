import React from 'react'
import Carousel from '@/components/Carousel/Carousel1'

export default function Programs() {
    return (
        <section className="relative">
            <div className="title py-8 px-4">
                <h3 className=" text-4xl font-bold text-center">
                    Our Programs
                    <div className="w-1/12 m-auto mt-4 h-1 bg-primary rounded-full "></div>
                </h3>
            </div>
            <div className="py-8 lg:py-16 px-4 overflow-hidden">
                <Carousel />
            </div>
        </section>
    )
}
