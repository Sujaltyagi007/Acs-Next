import React from 'react'
import Navbar from '@/component/Navbar'
import HeroSection from '@/component/Home/HeroSection'
import About from '@/component/Home/About'

export default function page() {
  return (
    <div className=' relative h-dvh'>
      <Navbar />
      <HeroSection />
      <About />
    </div>
  )
}
