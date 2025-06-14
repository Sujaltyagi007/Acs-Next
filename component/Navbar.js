'use client'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/Logo/Acs.png'
import Cloud from '@/Assets/Home/cloud-2.png'
import { Comic_Neue, Luckiest_Guy } from 'next/font/google';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { motion } from 'motion/react';
const nunito = Comic_Neue({
    subsets: ['latin'],
    weight: ['700'],
})
const lucky = Luckiest_Guy({
    subsets: ['latin'],
    weight: ['400'],
})
export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <header className={` absolute z-30 top-0 left-0 right-0 font-bold h-10 lg:px-16 ${nunito.className} `}>
            <Image src={Cloud} width={1600} height={100} alt='Apna chhota school' className=' w-full hidden md:block absolute top-0 left-0 -translate-y-2 -rotate-x-180 ' />
            <div className="container mx-auto hidden md:flex justify-between items-center relative ">
                <Link href='/'>
                    <div className="logo flex gap-4">
                        <Image src={Logo} width={70} height={70} alt="Apna chhota school" />
                        <div className={`hidden ${lucky.className} lg:flex tracking-wider cursor-pointer  items-center gap-2 lg:text-2xl`} loading="lazy">
                            Apna Chhota School
                        </div>
                    </div>
                </Link>
                <nav className='hidden md:block'>
                    <ul className='font-comic-Neue flex text-xl  gap-4'>
                        <Link href='/about'> <li className=' cursor-pointer px-4 py-2 rounded-full hover:bg-slate-300'>About</li></Link>
                        <Link href='/Programs'><li className=' cursor-pointer px-4 py-2 rounded-full hover:bg-slate-300'>Programs</li></Link>
                        <Link href='/Admission'><li className=' cursor-pointer px-4 py-2 rounded-full hover:bg-slate-300'>Admission</li></Link>
                        <Link href='/Gallery'><li className=' cursor-pointer px-4 py-2 rounded-full hover:bg-slate-300'>Gallery</li></Link>
                    </ul>
                </nav>
                <Link href='/contact'><button className='text-white cursor-pointer bg-amber-600 px-4 py-2 rounded-md hidden md:block'>Contact Us</button></Link>
                <div className="md:hidden mx-1 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
            <div className=' relative z-10 mx-auto container block md:hidden h-12 bg-white '>
                <div className=' flex justify-between items-center px-4 py-0.5 '>
                    <Link href='/'
                        onClick={() => setIsVisible(false)}
                    >
                        <div>
                            <Image src={Logo} width={60} height={60} alt='Logo' className=' w-14 h-14 ' />
                        </div>
                    </Link>
                    <AnimatePresence mode="wait">
                        {isVisible ? (
                            <motion.div
                                key="plus"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setIsVisible(!isVisible)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="rotate-45 lucide lucide-plus"
                                >
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                </svg>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setIsVisible(!isVisible)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-10 h-10"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <Image src={Cloud} width={1600} height={100} alt='Apna chhota school' className=' w-full block md:hidden -translate-y-2 -rotate-x-180 ' />
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ y: -400 }}
                        animate={{
                            y: -10,
                            transition: { type: 'spring', stiffness: 300, damping: 30 }
                        }}
                        exit={{
                            y: -400,
                            transition: { duration: 0.3 }
                        }}
                        className='md:hidden mx-auto container w-full bg-transparent px-4'
                    >
                        <div className='h-full rounded-2xl bg-white py-5 px-2'>
                            <Link href='/about' onClick={() => setIsVisible(false)}>
                                <span><p>About</p></span>
                            </Link>
                            <p>Hello</p>
                            <p>Hello</p>
                            <p>Hello</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


        </header>
    )
}
