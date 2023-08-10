import Banner from '@/app/home/Banner'
import Design from './home/Design'
import SoftwareDevelopment from './home/SoftwareDevelopment'
import CustomerSuccess from './home/CustomerSuccess'
import ImgSection from './home/ImgSection'
import FreeTrial from './home/FreeTrial'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-5">
        <Banner />
        <Design />
        <SoftwareDevelopment />
        <CustomerSuccess />
        <ImgSection />
        <FreeTrial />
    </div>
  )
}
