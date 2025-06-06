import Pencil from '@/Assets/Home/Demo/pencil.png'
import Image from 'next/image'
import Img1 from '@/Assets/Home/Image.jpg'
import Cloud from '@/Assets/Home/cloud-2.png'
import Grow from '@/components/Svg/Growth.svg'
import { Bubblegum_Sans } from 'next/font/google'
const bubble = Bubblegum_Sans({
    subsets: ['latin'],
    weight: ['400']
})

export default function About() {
    return (
        <div className=' w-full pt-10 '>
            <Image src={Cloud} width={1400} height={100} alt='apna chhota school' className=' absolute z-10 transform -translate-y-38 ' />
            <div className=' mx-auto container flex justify-between items-center p-10  '>
                <div className='flex justify-center items-center h-[70vh] gap-10 w-2/5 '>
                    <div className=' rounded-2xl overflow-hidden w-3/5 '>
                        <Image src={Img1} width={400} height={200} alt='Apna chhota school' />
                    </div>
                    <div className=' flex flex-col justify-between py-6 h-full w-2/5 gap-10  '>
                        <div className=' flex justify-center items-center h-full '>
                            <Image src={Pencil} width={50} height={50} alt='Apna chhota school' />
                        </div>
                        <div className=' flex flex-col text-center h-full justify-center p-2 items-center rounded-xl bg-amber-500/40 '>
                            <Image src={Grow} alt='Grow' width={40} height={40} className='' />
                            <p className=' font-bold'>Academy</p>
                            <p className=' text-[12px]'>Learning Leading School</p>
                        </div>
                        <div className=' flex flex-col h-full text-center justify-center shadow px-4 items-center rounded-xl '>
                            <p className=' flex text-start w-full px-2 text-2xl font-extrabold text-[#20fa8d] '>10+</p>
                            <p className=' text-[12px] text-gray-400 '> Learning Ladder School</p>
                        </div>
                        
                    </div>
                </div>
                <div className=' w-2/5 h-full ' >
                    <p className={`${bubble.className} text-[#20fa8d]`}>
                        About Us
                    </p>
                    <h2 className=' font-bold text-2xl'>
                        Unlocking Potential, One Child at a just time in school.
                    </h2>
                    <p>
                        lorem
                    </p>
                    <button className=' p-3 rounded-lg border border-black/50'>
                        Get a quote
                    </button>
                </div>
            </div>
        </div>
    )
}
