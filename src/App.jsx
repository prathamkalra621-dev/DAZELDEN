import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about-us" element={<About us />} />

        <Route path="/services" element={<Services />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      {/* FOOTER */}
      <footer className="footer">

        <div className="container footer-grid">

          <div className="footer-brand">

            <img
              src="/dazelden-logo.png"
              alt="DAZELDEN Logo"
            />

            <h3>DAZELDEN</h3>

            <p>
              Grow Your Business Online.
            </p>

          </div>

          <div className="footer-column">
            <h4>Explore</h4>

            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-column">
            <h4>Services</h4>

            <span>Digital Marketing</span>
            <span>Social Media</span>
            <span>SEO</span>
            <span>Branding</span>
            <span>Web Development</span>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>

            <a href="mailto:hello@dazelden.com">
              Email
            </a>

            <a href="#">
              Instagram
            </a>

            <a href="#">
              LinkedIn
            </a>

            <a href="#">
              Facebook
            </a>
          </div>

        </div>

        <div className="container footer-bottom">

          <p>
            © {new Date().getFullYear()} DAZELDEN. All Rights Reserved.
          </p>

          <p>
            Digital Marketing Agency
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;