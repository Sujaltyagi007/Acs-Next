'use client'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/Logo/Acs.png'
import Cloud from '@/Assets/Home/cloud-2.png'
import { Comic_Neue, Luckiest_Guy } from 'next/font/google';


const nunito = Comic_Neue({
    subsets: ['latin'],
    weight: ['700'],
})
const lucky = Luckiest_Guy({
    subsets: ['latin'],
    weight: ['400'],
})

export default function Navbar() {
    return (
        <header className={` relative z-30 top-0 left-0 right-0 font-bold px-4 h-10 lg:px-16 ${nunito.className} `}>
            <Image src={Cloud} width={1600} height={100} alt='Apna chhota school' className=' w-full absolute top-0 left-0 -translate-y-2 -rotate-x-180 ' />
            <div className="container mx-auto flex justify-between items-center relative ">
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
        </header>
    )
}
