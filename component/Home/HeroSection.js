'use client'
import WebSlider from '@/component/Home/WebSlider'
import MobSlider from '@/component/Home/MobSlider'
export default function HeroSection() {
    return (
        <>
            <div className=' hidden md:block'>
                <WebSlider />
            </div>
            <div className=' block md:hidden'>
                <MobSlider />
            </div>
        </>


    )
}
