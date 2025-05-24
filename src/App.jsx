import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import ScrollToTop from "./components/ScrollToTop";

import Hero from "./pages/Hero";
import About from "./pages/About";
import TechnicalSkills from "./pages/TechnicalSkills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans scroll-smooth">
      <Navbar />
      <SocialLinks />
      <main className="pt-24">
        <Hero />
        <About />
        <TechnicalSkills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
