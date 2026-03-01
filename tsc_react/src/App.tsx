import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Sevices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar stays on top */}
      <Navbar />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer stays at bottom */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;
