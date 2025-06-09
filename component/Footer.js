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
import { FaRegStar } from "react-icons/fa"
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
                <p className="  mx-auto container px-6 md:px-0 flex justify-between md:justify-around items-center absolute z-10 w-full">
                    <Image src={Owl} alt='owl-Image' width={60} height={60} className=" md:-translate-x-6 md:-translate-y-0 transform translate-x-10 -translate-y-6 md:w-16 w-12 " />
                    <Image src={Owl} alt='owl-Image' width={60} height={60} className=" rotate-y-180 md:-translate-x-30 md:-translate-y-0 -translate-y-6 -translate-x-6 md:w-16 w-12 " />
                </p>
            </div>
            <div className=" relative z-50 md:-translate-y-10  w-full grid md:grid-cols-2 grid-cols-1 ">
                <div className=" md:px-10 md:py-4 px-4 py-2 ">
                    <p className=" flex items-center md:gap-6 gap-2 ">
                        <Image src={Logo} width={80} height={80} alt="apna chhota school" className=" md:w-24 w-18 " />
                        <span className={`${lucky.className} text-2xl text-white`}>
                            APNA Chhota School
                        </span>
                    </p>
                    <p className=" text-white my-4 md:my-0 leading-3 md:leading-6 md:text-start text-center text-[12px] md:text-[15px]">
                        Apna Chhota School is a nurturing primary education institution
                        dedicated to fostering young minds. We provide a supportive
                        learning environment where children can grow, explore, and develop
                        essential skills. Our experienced teachers and innovative
                        curriculum ensure a strong foundation for your child's educational
                        journey.
                    </p>
                </div>
                <div className=" flex flex-col md:flex-row h-full justify-between w-full text-[15px]   ">
                    <div className=" w-full md:w-fit flex justify-center flex-col items-center h-full md:py-6 ">
                        <p className={`w-full text-center ${lucky.className} py-2 text-center md:text-start text-2xl text-white `} >
                            Quick Links
                        </p>
                        <div className=" flex  h-fit md:font-normal font-bold gap-6 md:gap-10 uppercase text-white">
                            <div className=" h-full flex flex-col gap-2 ">
                                {Links1.map((item, index) => (
                                    <Link key={index} href="/">
                                        <span className=" flex justify-start gap-2 items-center"><FaRegStar className=" block md:hidden" /><p className="">{item}</p></span >
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-col gap-2">
                                {Links2.map((item, index) => (
                                    <Link key={index} href="/">
                                        <span className=" flex justify-start gap-2 items-center"><FaRegStar className=" block md:hidden" /><p className="">{item}</p></span >
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className=" text-white md:text-[16px] text-[12px] flex flex-col gap-2 px-4 md:px-0 py-6 w-full md:w-3/5">
                        <p className={`${lucky.className} text-center md:text-start text-2xl px-0 md:px-10 `}>Contact Us</p>
                        <span className=" flex gap-3" >
                            <p className=" text-2xl">
                                <CiLocationOn />
                            </p>
                            <p className=" md:text-[16px] text-[12px] ">
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
            <div className="absolute hidden md:flex items-end w-full h-full">
                <div className=" flex justify-between items-center w-full">
                    {
                        Images.map((item, index) => (
                            <Image key={index} alt='Apna Chhota School' src={item.src} width={280} height={280} className="" />
                        ))
                    }
                </div>

            </div>
            <div className=" relative flex flex-col md:flex-row items-end justify-center ">
                <div className=" mx-auto container absolute px-4 md:px-0 z-10 text-orange-800 flex flex-row justify-between items-center ">
                    <div className="text-sm hidden md:block w-3/10 ">
                        <p>© {new Date().getFullYear()} Apna Chhota School. All rights reserved.</p>
                        <p className=" text-[12px]">Crafted & Maintained with ❤ by <a href="https://mstyenterprises.com/" className=" px-0.5 font-extrabold " > Msty Enterprises.</a></p>
                    </div>
                    <div className={`${lucky.className} text-lg md:text-3xl uppercase w-3/5 md:w-4/10 text-center `}>
                        Apna choota school
                    </div>
                    <div className=" text-gray-500 flex justify-end items-center w-2/5 md:w-3/10 gap-3">
                        <p className="pb-2">
                            <RiFacebookFill className=" border p-2 text-3xl md:text-4xl rounded-full " />
                        </p>
                        <p className="pb-2">
                            <FaInstagram className=" border p-2 text-3xl md:text-4xl rounded-full " />
                        </p>
                        <p className="pb-2">
                            <FaLinkedinIn className=" border p-2 text-3xl md:text-4xl rounded-full overflow-visible " />
                        </p>
                    </div>
                </div>
                <Image
                    src={Cloud}
                    width={1600}
                    height={200}
                    alt="Footer-Cloud"
                    className=" md:translate-0 translate-y-1  "
                />
                <div className="md:hidden flex flex-col justify-center items-center text-[8px] w-full h-20 bg-white">
                    <p className=" font-bold text-orange-800 text-[10px] translate-y-4">© {new Date().getFullYear()} Apna Chhota School. All rights reserved.</p>
                    <p className=" flex justify-center items-center font-bold text-orange-800 translate-y-4">Crafted & Maintained with ❤ by <a href="https://mstyenterprises.com/" className=" px-0.5 font-extrabold " > Msty Enterprises.</a></p>
                </div>
            </div>
        </div >
    );
}
