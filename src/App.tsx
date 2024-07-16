import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./app/Home/Home";
import Blog from "./app/Blog/Blog";
import About from "./app/About us/About";
import Pricing from "./app/Pricing/Pricing";
import Showcase from "./app/Showcase/Showcase";
import "./App.css";
import { Navbar } from "./app/pageComponents/Navbar";
import { Footer } from "./app/pageComponents/Footer";
import { Privacy } from "./app/Terms-privacy/Privacy";
import { Terms } from "./app/Terms-privacy/Terms";
import ContactUs from "./app/Contact us/ContactUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="container mx-auto px-4">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
