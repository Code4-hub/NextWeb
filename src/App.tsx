import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./app/Home/Home";
import Blog from "./app/Blog/Blog";
import About from "./app/About us/About";
import Pricing from "./app/Pricing/Pricing";
import Showcase from "./app/Showcase/Showcase";
// import { Navbar } from "../pageComponents/Navbar";
// import { FAQs } from "./FAQs/FAQs";
// import { Footer } from "../pageComponents/Footer";
import "./App.css";
import { Navbar } from "./app/pageComponents/Navbar";
import { Footer } from "./app/pageComponents/Footer";
// import { FAQs } from "./app/Pricing/FAQs/FAQs";

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
      </Routes>
      <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
