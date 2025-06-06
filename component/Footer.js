import Image from "next/image";
import Cloud from "@/Assets/Home/cloud-2.png";
import { Luckiest_Guy } from "next/font/google";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { GoMail } from "react-icons/go";
import Logo from '@/Assets/Home/Footer/logo.png'
import Owl from '@/Assets/Home/Demo/owl.png'
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import FooterStudent from '@/Assets/Home/Demo/footer-student.png'
import DinaSour from '@/Assets/Home/Demo/dinasour.png'
import Cartoon from '@/Assets/Home/Demo/cartoon-1.png'
import Brush from '@/Assets/Home/Demo/pencil.png'
import Smile from '@/Assets/Home/Demo/Smile.png'
const lucky = Luckiest_Guy({
    subsets: ['latin'],
    weight: ['400'],
})
export default function Footer() {
    const Links1 = [
        'Home',
        'About',
        'Contact',
        'Gallery',
    ]
    const Links2 = [
        'Programe',
        'Activity',
        'Parent Info',
        'Policy',
    ]
    const Images = [
        Cartoon,
        // Brush,
        FooterStudent,
        // Smile,
        DinaSour,
    ]
    return (
        <div className=" h-[95vh] relative bg-orange-800 w-full flex flex-col justify-between ">
            <div className=" flex relative justify-center items-center w-full -translate-y-2 ">
                <Image
                    src={Cloud}
                    width={1600}
                    height={200}
                    alt="Footer-Cloud"
                    className=" rotate-180"
                />
                <p className="  mx-auto container flex justify-around items-center absolute z-10 w-full">
                    <Image src={Owl} alt='owl-Image' width={60} height={60} className=" -translate-x-6 " />
                    <Image src={Owl} alt='owl-Image' width={60} height={60} className=" rotate-y-180 -translate-x-30" />
                </p>
            </div>
            <div className=" relative z-50  -translate-y-10 w-full grid grid-cols-2 ">
                <div className="  px-10 py-4">
                    <p className=" flex items-center gap-6 ">
                        <Image src={Logo} width={80} height={80} alt="apna chhota school" className="" />
                        <span className={`${lucky.className} text-2xl text-white`}>
                            APNA Chhota School
                        </span>
                    </p>
                    <p className=" text-white leading-6  text-[15px]">
                        Apna Chhota School is a nurturing primary education institution
                        dedicated to fostering young minds. We provide a supportive
                        learning environment where children can grow, explore, and develop
                        essential skills. Our experienced teachers and innovative
                        curriculum ensure a strong foundation for your child's educational
                        journey.
                    </p>
                </div>
                <div className=" flex h-full justify-between w-full text-[15px]   ">
                    <div className=" w-fit h-full py-6 ">
                        <p
                            className={`w-full text-center ${lucky.className} py-2 text-2xl text-white `}
                        >
                            Quick Links
                        </p>
                        <div className=" flex  h-fit  gap-10 uppercase text-white">
                            <div className=" h-full flex flex-col gap-2 ">
                                {Links1.map((item, index) => (
                                    <Link key={index} href="/">
                                        <p className="">{item}</p>
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-col gap-2">
                                {Links2.map((item, index) => (
                                    <Link key={index} href="/">
                                        <p className="">{item}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className=" text-white flex flex-col gap-2 py-6 w-3/5">
                        <p className={`${lucky.className} text-2xl px-10 `}>Contact Us</p>
                        <span className=" flex gap-3" >
                            <p className=" text-2xl">
                                <CiLocationOn />
                            </p>
                            <p className="">
                                Basti Vikas Kendra, Harijan Basti, Chuna Bhatti, Near
                                Nirankari- Satsang Bhawan, Kirti Nagar, New Delhi -110015,
                                110015
                            </p>
                        </span>
                        <span className=" flex gap-3" >
                            <p className=" text-2xl">
                                <MdOutlinePhone />
                            </p>
                            <p className="">
                                <a href="tel:+919990770201">
                                    +91 99907 70201
                                </a>
                            </p>
                        </span>
                        <span className=" flex gap-4" >
                            <p className=" text-2xl">
                                <GoMail />
                            </p>
                            <p className="">
                                <a href="mailto:admin@careindiawelfaretrust.org">
                                    admin@careindiawelfaretrust.org
                                </a>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
            <div className=" absolute flex items-end w-full h-full">
                <div className=" flex justify-between items-center w-full">
                    {
                        Images.map((item, index) => (
                            <Image key={index} alt='Apna Chhota School' src={item.src} width={280} height={280} className="" />
                        ))
                    }
                </div>

            </div>
            <div className=" relative flex items-end justify-center ">
                <div className=" mx-auto container absolute z-10 text-orange-800 flex justify-between items-center ">
                    <div className="text-sm w-3/10 ">© {new Date().getFullYear()} Apna Chhota School. All rights reserved.</div>
                    <div className={`${lucky.className} text-2xl uppercase w-4/10 text-center `}>
                        Apna choota school
                    </div>
                    <div className=" text-gray-500 flex justify-end items-center w-3/10 gap-3">
                        <p className="pb-2">
                            <RiFacebookFill className=" border p-2 text-4xl rounded-full " />
                        </p>
                        <p className="pb-2">
                            <FaInstagram className=" border p-2 text-4xl rounded-full " />
                        </p>
                        <p className="pb-2">
                            <FaLinkedinIn className=" border p-2 text-4xl rounded-full overflow-visible " />
                        </p>
                    </div>
                </div>
                <Image
                    src={Cloud}
                    width={1600}
                    height={200}
                    alt="Footer-Cloud"
                    className=" "
                />
            </div>
        </div>
    );
}
