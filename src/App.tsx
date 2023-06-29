import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Rooms from "./components/Rooms/Rooms";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/facilities" element={<Rooms />} />
          <Route path="/contact" element={<Rooms />} />
          <Route path="/offers" element={<Rooms />} />
          <Route path="/events" element={<Rooms />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
