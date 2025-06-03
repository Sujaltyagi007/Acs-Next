import React from 'react'
import Image from 'next/image'
import Img1 from '@/Assets/Home/Image.jpg'
import Cloud from '@/Assets/Home/Cloud.png'

export default function About() {
    return (
        <div className=' w-full bg-amber-200 pt-10 '>
            <Image src={Cloud} width={1500} height={100} alt='apna chhota school' className=' absolute z-10 transform -translate-y-38 ' />
            <div className=' mx-auto container grid grid-cols-2'>
                <div className=''>
                    <div>
                        <Image src={Img1} width={400} height={400} alt='Apna chhota school' />
                    </div>
                    <div className=''>
                        <div>
                            {/* <Image src={''} width={''} height={''} /> */}
                        </div>
                    </div>
                </div>
                <div className='' >

                </div>
            </div>
        </div>
    )
}
