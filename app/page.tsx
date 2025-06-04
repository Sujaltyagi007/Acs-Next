import React from 'react'
import Navbar from '@/component/Navbar'
import HeroSection from '@/component/Home/HeroSection'
import About from '@/component/Home/About'
import Mission from '@/component/Home/Mission'
import Activity from '@/component/Home/Activity'
export default function page() {
  return (
    <div className=' relative h-dvh'>
      <Navbar />
      <HeroSection />
      <About />
      <Mission />
      <Activity />
    </div>
  )
}
