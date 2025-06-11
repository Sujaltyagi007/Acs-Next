import Carousel from '@/components/Carousel/Carousel1'
import { Bubblegum_Sans } from 'next/font/google'
import Image from 'next/image'
import Planet from '@/components/Svg/Planet.svg'

const bubble = Bubblegum_Sans({
    subsets:['latin'],
    weight:['400']
})
export default function Programs() {
    return (
        <section className="relative md:h-fit py-6 md:py-4 ">
            <div className="title md:py-3 py-2 px-4">
                <p className={` ${bubble.className} text-[14px] flex justify-center items-center gap-2 md:gap-3 lg:md:gap-4 -translate-x-12  text-[#eb1551] text-center `}>
                    <span>
                        <Image src={Planet} width={80} height={80} alt='Planet' className=' w-24 h-18 ' />
                    </span>
                     Making a Difference
                </p>
                <h3 className=" text-4xl font-bold text-center -translate-y-4 ">
                    Our Programs
                </h3>
            </div>
            <div className="py-8 lg:py-16 px-4 overflow-hidden">
                <Carousel />
            </div>
        </section>
    )
}
