import Hero from './components/Hero'
import About from './components/Home/About'
import Service from './components/Home/Service'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'

import './index.css'
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Service/>
    <Footer/>
          </>
  )
}

export default App