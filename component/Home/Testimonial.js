import Image from 'next/image'
import StrawBerry from '@/components/Svg/Strawberry.svg'
import BackGround from '@/Assets/Home/Parents/BackGround-Image.png'
import { Bubblegum_Sans } from 'next/font/google'


const bubble = Bubblegum_Sans({
    subsets: ['latin'],
    weight: ['400']
})
export default function Testimonial() {
    return (
        <div className=' flex flex-col justify-center items-center w-full h-[90vh] bg-[#fff9f4]'>
            <div className='flex flex-col gap-4'>
                <span className=' flex justify-center items-center gap-4'>
                    <Image src={StrawBerry} alt='StrawBerry-image' width={40} height={40} className='' />
                    <p className={`${bubble.className} text-[#eb1551]`}>
                        Happy Parents
                    </p>
                </span>
                <p className=' text-4xl font-bold ml-4 '>Our Testimonial</p>
            </div>
            <div className=''>
                <Image src={BackGround} width={1200} height={200} alt='BackGround_Image' className='' />
            </div>

        </div>
    )
}
