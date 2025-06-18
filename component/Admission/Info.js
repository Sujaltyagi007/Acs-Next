import Img1 from '@/Assets/Admission/tab1.jpg'
import Img2 from '@/Assets/Admission/tab2.jpg'
import Img3 from '@/Assets/Admission/tab3.jpg'
import Img4 from '@/Assets/Admission/tab4.jpg'
import { Nunito } from 'next/font/google';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { MapPinned, MessageSquareShare, Phone } from 'lucide-react';
const nun = Nunito({
    subsets: ['latin'],
    weight: ['600', '700', '400']
})
export default function Info() {
    const images = [Img1, Img2, Img3, Img4]
    return (
        <section className='grid grid-cols-2'>
            <div className='grid grid-cols-2 w-6/5 '>
                {
                    images.map((img, index) => (
                        <div key={index} className='w-full h-full p-4 mx-4 '>
                            <p className={`aspect-[5/4] ${index % 2 ? 'rounded-tr-full' : 'rounded-br-full'}  bg-center bg-cover bg-no-repeat`}
                                style={{
                                    backgroundImage: `url(${img.src})`
                                }}>
                            </p>
                            <span></span>
                        </div>
                    ))
                }
            </div>
            <div className=' w-full relative h-full flex justify-end items-center ' >
                <div className="w-3/5 h-4/5 rounded-tl-4xl rounded-bl-4xl relative bg-[#eb1551] text-white shadow-lg">
                    <address className="absolute z-10 p-6 w-11/12 flex flex-col h-[90%] justify-around max-w-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"
                        aria-label="Phone Contact Information" >
                        <div className=' absolute z-10 -left-12 top-1/2 flex items-center -translate-x-0 -translate-y-1/2 w-8 h-3/5 bg-[#c55d0a] rounded-l-full '>
                            <div className=' w-[55px] z-[999] absolute h-[80%] bg-[#f7941e] rounded-r-full '>
                                {/* <p className='bg-red-300 origin-center -rotate-90'>acs</p> */}
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-start gap-8 sm:text-2xl">
                            <div className="flex items-start gap-10">
                                <Phone aria-hidden="true" className="mt-1 text-2xl" />
                                <div className={`${nun.className}`}>
                                    <h2 className="text-lg sm:text-lg font-semibold mb-2">Phone</h2>
                                    <ul className="space-y-1 text-[14px] ">
                                        <li>
                                            <a href="tel:+919999955555" className="hover:underline">
                                                +91-99999 55555
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+919999989748" className="hover:underline">
                                                +91-99999 89748
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-start gap-8 sm:text-2xl">
                            <div className="flex items-start gap-10">
                                <MessageSquareShare aria-hidden="true" className="mt-1 text-2xl" />
                                <div className={`${nun.className}`}>
                                    <h2 className="text-lg sm:text-lg font-semibold mb-2">Email</h2>
                                    <ul className="space-y-1 text-[14px] ">
                                        <li>
                                            <a href="mailto:info@example.com" className="">
                                                info@example.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:admin@example.com" className="">
                                                admin@example.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-start gap-8 sm:text-2xl">
                            <div className="flex items-start gap-10">
                                <span className="mt-1 text-2xl ">
                                    <MapPinned aria-hidden="true" />
                                </span>
                                <div className={`${nun.className}`}>
                                    <h2 className="text-lg sm:text-lg font-semibold mb-2">Location</h2>
                                    <ul className="space-y-1 text-[14px] ">
                                        <li>
                                            Rama Road Industrial Area, Kirti Nagar, Delhi-110015
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-start gap-8 sm:text-2xl">
                            <div className="flex items-start gap-10">
                                <FaEarthAmericas aria-hidden="true" className="mt-1 text-2xl" />
                                <div className={`${nun.className}`}>
                                    <h2 className="text-lg sm:text-lg font-semibold mb-2">Social Media</h2>
                                    <ul className="space-y-1 text-[14px] ">
                                        <li className=' flex gap-6'>
                                            <a href="mailto:info@example.com" className="">
                                                <CiFacebook />
                                            </a>
                                            <a href="mailto:info@example.com" className="">
                                                <FaTwitter />
                                            </a>
                                            <a href="mailto:info@example.com" className="">
                                                <CiLinkedin />
                                            </a>
                                            <a href="mailto:info@example.com" className="">
                                                <FaInstagram />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </address>
                </div>
            </div>

        </section>
    )
}
