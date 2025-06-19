import Navbar from "@/component/Navbar"
import Footer from "@/component/Footer"
import Banner from "@/component/About/Banner"
import Facility from '@/component/About/Facility'
import Creativity from '@/component/About/Creativity'

export default function page() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Facility />
        <Creativity />
        <Footer />
    </div>
  )
}
