import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Rooms from "./components/Rooms/Rooms";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import Events from "./components/Events/Events";
import Facilities from "./components/Facilities/Facilities";
const App = () => {
  return (
    <>
      <Router>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/facilities" element={<Facilities />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/offers" element={<Home />} />
          <Route path="/events" element={<Events/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
