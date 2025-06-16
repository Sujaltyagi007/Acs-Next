import Image from "next/image"
import { Bubblegum_Sans } from "next/font/google"
import FacilityIcon from '@/component/About/FacilityIcon'
import Cloud from '@/Assets/About/Facility/Cloud.svg'

const bubble = Bubblegum_Sans({
    subsets:['latin'],
    weight:['400']
})
export default function Facility() {
    return (
        <section className=" bg-[#f7941e] text-white h-dvh ">
            <div className=" absolute z-1 left-0 ">
                <div className=" -translate-y-[30%]">
                    <Image src={Cloud} width={1000} height={1000} className=" w-[40vw] "  alt="About-Section-Cloud" />
                </div>
            </div>
            <div>
                <div className=" heading flex sm:flex-col justify-center sm:gap-0 gap-2 items-center -translate-x-[5%] sm:-translate-x-0 ">
                    <FacilityIcon className='' />
                    <span className=" pt-2  ">
                        <p className={`${bubble.className} sm:text-2xl`}>Our Facilities</p>
                    </span>
                </div>
            </div>
        </section>
    )
}
