import React from 'react'
import Navbar from '@/component/Navbar'
import HeroSection from '@/component/Home/HeroSection'
import About from '@/component/Home/About'
import Mission from '@/component/Home/Mission'
import Activity from '@/component/Home/Activity'
import BehindStory from '@/component/Home/BehindStory'
import Programs from '@/component/Home/Programs'
import NewActivity from '@/component/Home/NewActivity'
import Testimonials from '@/component/Home/Testimonial'
import Footer from '@/component/Footer'
export default function page() {
  return (
    <div className=' relative h-dvh'>
      <Navbar />
      <HeroSection />
      <About />
      <Mission />
      <Activity />
      <BehindStory />
      <Programs />
      <NewActivity />
      <Testimonials />
      <Footer />
    </div>
  )
}
