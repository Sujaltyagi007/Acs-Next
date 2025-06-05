
import Image from "next/image";
import { Bubblegum_Sans, Nunito } from "next/font/google";
import Rainbow from '@/components/Svg/Rainbow.svg'
import ButterFly from '@/components/Svg/Butterfly.svg'
import Carousel2 from '@/components/Carousel/Carousel2'


const bubble = Bubblegum_Sans({
    subsets: ["latin"],
    weight: ["400"],
});
const nunito = Nunito({
    subsets: ["latin"],
    weight: ["800"],
});

export default function NewActivity() {
    return (
        <div className=" relative flex flex-col  items-center gap-4">
            <p className=" absolute z-10 flex justify-end h-fit w-[85%]">
                <Image src={Rainbow.src} width={150} height={150} alt="Apna Chhota School" />
            </p>
            <p className="absolute z-10 flex justify-start h-fit w-[85%]">
                <Image src={ButterFly} width={100} height={100} alt='Butter-Fly' />
            </p>
            <p className={`${bubble.className} text-[#EB1551]`}>Activity Program</p>
            <p className={`${nunito.className} text-4xl `}>Smart Activities</p>
            <p className=" flex justify-center items-center text-center w-[60%] ">
                Our activity sessions are thoughtfully designed to support every aspect
                of a child's development. Through engaging play, children improve their
                motor skills, social interaction, and creative thinking. These
                experiences lay the foundation for confident, curious, and well-rounded
                learners.
            </p>
            <div className="   ">
                <Carousel2 />
            </div>
        </div>
    );
}
