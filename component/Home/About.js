import React from 'react'
import Image from 'next/image'
import Img1 from '@/Assets/Home/Image.jpg'
import Cloud from '@/Assets/Home/cloud-2.png'

export default function About() {
    return (
        <div className=' w-full bg-amber-200 pt-10 '>
            <Image src={Cloud} width={1400} height={100} alt='apna chhota school' className=' absolute z-10 transform -translate-y-38 ' />
            <div className=' mx-auto container flex justify-center items-center  py-10 px-10 '>
                <div className='flex justify-center items-center h-[70vh] w-3/5 '>
                    <div className=' rounded-2xl overflow-hidden '>
                        <Image src={Img1} width={500} height={200} alt='Apna chhota school' />
                    </div>
                    <div className=' flex flex-col justify-between py-6 h-full w-full gap-10  '>
                        <div>
                            {/* <Image src={Img1} width={'400'} height={'400'} alt='Apna chhota school' /> */}
                        </div>
                        <div className=' flex flex-col text-center justify-center items-center rounded-xl bg-amber-500 w-3/5 '>
                            <p>Academy</p>
                            <p>Learning Leading School</p>
                        </div>
                        <div className=' flex flex-col text-center justify-center items-center rounded-xl w-3/5 bg-amber-500'>
                            <p>10+</p>
                            <p>Learning Ladder School</p>
                        </div>
                        
                    </div>
                </div>
                <div className=' w-2/5 h-full ' >
                    <p>
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
