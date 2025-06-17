import { Bubblegum_Sans } from 'next/font/google'
import Image from 'next/image'
import Hat from '@/components/Svg/Hat.svg'
import Img1 from '@/Assets/About/Creativity/a1.jpg'
import Img2 from '@/Assets/About/Creativity/a2.jpg'

const bubble = Bubblegum_Sans({
    subsets: ['latin'],
    weight: ['400']
})
export default function Creativity() {
    return (
        <section className=' relative '>
            <span className=' bg-red-400 h-20 absolute right-0 bottom-1/2 p-5'>

            </span>
            <div className=' container mx-auto flex justify-around items-center'>
                <div className='  w-4/12  flex flex-col gap-4 '>
                    <span className={`${bubble.className}`}>
                        <Image src={Hat} width={120} height={120} alt='Education' className='' />
                        <p className=' text-[#EB1551] '> Find Kid's Creativity </p> </span>
                    <h1 className=' text-3xl font-bold'>Your Children’s <br /> Creativity Works!</h1>
                    <p className=' text-base max-w-80'>
                        Molestie at elementum eu facilisis sed odio morbi quis. Magna etiam tempor orci eu lobortis. Ullamcorper dignissim cras tincidunt lobortis. Volutpat blandit aliquam etiam erat velit.
                    </p>
                    <button className=" text-xl bg-[#EB1551] px-4 py-2 rounded-4xl w-fit">
                        Creative Works
                    </button>
                </div>
                <div className=' flex justify-between w-7/12 '>
                    <div
                        className=' w-[400px] h-[300px] bg-center bg-cover rounded-br-full bg-no-repeat'
                        style={{
                            backgroundImage: `url(${Img1.src})`
                        }}
                    >
                    </div>
                    <div
                        className=' w-[400px] h-[300px] bg-center rounded-tl-full bg-cover bg-no-repeat'
                        style={{
                            backgroundImage: `url(${Img2.src})`
                        }}
                    >
                    </div>
                </div>

            </div>
        </section>
    )
}
