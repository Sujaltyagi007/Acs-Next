import { Bubblegum_Sans } from 'next/font/google'
import Image from 'next/image'
import Child from '@/Assets/Admission/Child.png'

const bubble = Bubblegum_Sans({
    subsets: ['latin'],
    weight: ['400']
})
export default function QueryFrom() {
    return (
        <section className=' mx-auto container py-6 flex mt-4 '>
            <div className=' w-full md:w-3/5 '>
                <h1 className=' text-4xl font-bold px-[10%] '>
                    <p className={`${bubble.className} text-[18px] pb-2 text-[#eb1551]`}>
                        Reach Us
                    </p>
                    Admission From
                </h1>
                <div className=' flex flex-col gap-4 items-center py-6  '>
                    <input type='text' placeholder={`Child's Name`} className=' rounded-full py-2 px-6 w-9/10 border border-amber-300 outline-amber-400 shadow-amber-300/20 shadow-2xl  ' />
                    <input type='text' placeholder={`Father's Name`} className='rounded-full py-2 px-6 w-9/10  border border-amber-300 outline-amber-400 shadow-amber-300/20 shadow-2xl ' />
                    <input type='text' placeholder={`Mother's Name`} className='rounded-full py-2 px-6 w-9/10  border border-amber-300 outline-amber-400 shadow-amber-300/20 shadow-2xl ' />
                    <input type='text' placeholder={`Child's Age`} className='rounded-full py-2 px-6 w-9/10  border border-amber-300 outline-amber-400 shadow-amber-300/20 shadow-2xl ' />
                    <input type='text' placeholder={`Contact Number`} className='rounded-full py-2 px-6 w-9/10  border border-amber-300 outline-amber-400 shadow-amber-300/20 shadow-2xl ' />
                    <textarea placeholder={`Message`} className='rounded-full py-2 px-6 w-9/10  border border-amber-300 outline-amber-400 shadow-amber-300/20 shadow-2xl ' />
                    <button className=" cursor-pointer group relative mt-2 text-sm overflow-hidden text-white bg-[#EB1551] rounded-full w-fit">
                        <span className=' group-hover:w-full group-hover:h-full rounded-full bottom-0 left-0 h-0 w-0 transition-all ease-linear duration-400 -rotate-6 group-hover:-rotate-0 z-10  absolute bg-green-500'></span>
                        <p className=' py-3 px-6 z-20 relative  '>Send From</p>
                    </button>
                </div>
            </div>
            <div className=' w-2/5 md:flex hidden justify-center items-center '>
                <Image src={Child} width={1000} height={1000} alt='Child_image_Query_Form' className='w-4/5 h-4/5' />
            </div>
        </section>
    )
}
