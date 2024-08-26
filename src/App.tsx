import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./app/Home/Home";
import Blog from "./app/Blog/Blog";
import About from "./app/About us/About";
import Showcase from "./app/Showcase/Showcase";
import ContactUs from "./app/Contact us/ContactUs";
import ContactU from "./app/ContactU/Contactu";


import { Navbar } from "./app/pageComponents/Navbar";
import { Footer } from "./app/pageComponents/Footer";
import { Privacy } from "./app/Terms-privacy/Privacy";
import { Terms } from "./app/Terms-privacy/Terms";
import { Analytics } from "@vercel/analytics/react";
import { Homes } from "./app/Blog/pages/Home";

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

function Content() {
  const location = useLocation();
  const hideNavbarAndFooter =
    location.pathname === "/" || location.pathname === "/contact-us";

  return (
    <div className={`${!hideNavbarAndFooter && "container mx-auto px-4"}`}>
      <Analytics />
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:page" element={<Homes />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/conatctu" element={<ContactU />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

export default App;
