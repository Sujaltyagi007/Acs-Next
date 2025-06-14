import Bannner from '@/Assets/About/Banner/About-us.png'
import Link from 'next/link'
import { Comic_Neue } from 'next/font/google'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image';
import Img from '@/Assets/About/Image/about-3.png'
import FootBall from '@/components/Svg/FootBall.svg'
import Learing from '@/components/Svg/Learing.svg'

const comic = Comic_Neue({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

export default function Banner() {
  return (
    <div className=' relative mt-[15%] md:mt-[4.3%] lg:mt-[4%] xl:mt-[4%] w-full h-full  '>
      <div className=' w-full pl-[5%] bg-cover bg-center bg-no-repeat h-[25vh] sm:h-[60vh] md:h-[70vh] lg:[70vh] relative '
        style={{
          backgroundImage: `url(${Bannner.src})`,
          opacity: 0.8,
        }}
      >
        <div className="absolute inset-0 z-20 bg-black opacity-40 flex justify-center items-center h-full top-0 left-0  w-full "></div>

        <div className=' absolute inset-0 z-20  flex flex-col gap-4 justify-center items-center opacity-100 h-full text-white '>
          <p className={`${comic.className} font-extrabold text-3xl lg:text-7xl `}>About Us</p>
          <span className=' flex justify-center items-center gap-1 text-[#ffbb01]'><Link href='/'><p>Home</p></Link><MdOutlineKeyboardArrowRight /><Link href='/about'><p>About</p></Link></span>
        </div>

      </div>


      <div className='flex flex-col-reverse sm:flex-col  h-full w-full md:flex-row justify-center sm:items-start items-center py-10 gap-10 px-6 '>
        <div className=' w-full h-fit flex justify-center items-center  ' >
          <Image src={Img} width={1000} height={1000} alt='About_Image' className=' w-[60vw] h-[55vw] sm:w-[35vw] sm:h-[30vw] sm:motion-safe:animate-[bounce_4s_ease-in-out_infinite]  ' />
        </div>
        <div className=' w-full h-full   '>
          <div className=' pb-1'>
            <p className={`${comic.className} text-2xl text-violet-950 font-bold `}>
              Guiding the Young Generation To Success
            </p>
          </div>
          <div className='w-fit  '>
            <div className=''>
              <p>
                Empowering the next generation with the tools, mindset, and guidance they need to thrive and succeed in a changing world.
              </p>
            </div>
            <div className=' flex flex-col sm:flex-row justify-center items-center gap-4 py-4 '>
              <div className=' p-2 flex flex-col justify-center items-center shadow-2xl ' >
                <Image src={FootBall} width={80} height={80} alt='About-Section-FootBall' className=' ' />
                <span className=' text-[14px] text-center '>
                  <p className={`${comic.className} text-2xl `}>Sports Programs</p>
                  Guiding the next generation to success through dynamic sports programs that build character, discipline, and lifelong skills.
                </span>
              </div>
              <div className=' p-4 flex flex-col justify-center items-center shadow-2xl '>
                <Image src={Learing} width={60} height={60} alt='About-Section-Learning' className='' />
                <span className='  text-[14px] text-center'>
                  <p className={`${comic.className} text-2xl`}>Easy to Learing</p>
                  Inspiring young minds through engaging learning programs that spark curiosity, build confidence, and prepare them for a successful future.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
