import Hero from '../Hero'
import About from './About'
import Service from './Service'
import Navbar from '../Navbar/Navbar'


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero title={"A Memorable Experience."} button={"Reserve Now"}/>
    <About/>
    <Service/>
    
          </>
  )
}

export default App