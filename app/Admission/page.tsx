import Footer from '@/component/Footer'
import QueryForm from '@/component/Admission/QueryFrom'
import Navbar from '@/component/Navbar'
import Info from '@/component/Admission/Info'
import Banner from '@/component/Admission/Banner'
export default function page() {
    return (
        <>
            <Navbar />
            <Banner />
            <QueryForm />
            <Info />
            <Footer />
        </>
    )
}
