import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Feat from '../sections/features/Feat'

const Features = () => {
  return (
    <div className='min-h-screen w-full'>
      <Navbar></Navbar>
      <Feat></Feat>
      <Footer></Footer>
    </div>
  )
}

export default Features