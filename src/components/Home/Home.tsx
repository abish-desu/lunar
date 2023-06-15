import Hero from '../Hero'
import About from './About'
import Service from './Service'
import Footer from '../Footer'
import Navbar from '../Navbar/Navbar'


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero title={"A Memorable Experience."} button={"Reserve Now"}/>
    <About/>
    <Service/>
    <Footer/>
          </>
  )
}

export default App