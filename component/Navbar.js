'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '@/public/Logo/Acs.png'
import { Comic_Neue } from 'next/font/google';

const nunito = Comic_Neue({
    subsets: ['latin'],
    weight: ['700'],
})

export default function Navbar() {
    const [menu, setMenu] = useState(false)
    return (
        <header className={`fixed z-50 top-0 left-0 right-0 font-bold px-4 lg:px-16 py-1 border-b-2 bg-white ${nunito.className} `}>
            <div className="container mx-auto flex justify-between items-center">
                <Link href='/'>
                    <div className="logo flex gap-4">
                        <Image src={Logo} width={70} height={70} alt="Apna chhota school" />
                        <div className=" hidden lg:flex font-Lucky tracking-wider cursor-pointer  items-center gap-2 lg:text-2xl" loading="lazy">
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
                <Link href='/contact'><button className=' bg-primary text-white cursor-pointer bg-amber-600   px-4 py-2 rounded-md block'>Contact Us</button></Link>
                <div className="md:hidden mx-1 cursor-pointer"
                    onClick={() => setMenu(!menu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </header>
    )
}
