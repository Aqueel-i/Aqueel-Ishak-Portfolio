import React from "react";
import { MotionConfig } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Hero from "./pages/Hero";
import About from "./pages/About";
import TechnicalSkills from "./pages/TechnicalSkills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <MotionConfig reducedMotion="user">
    <div className="portfolio-shell">
      <Navbar />
      <main>
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
    </MotionConfig>
  );
}

export default App;
