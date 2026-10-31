import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const copyReveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
};
const itemReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => (
  <section id="home" className="hero-shell">
    <Motion.div className="hero-copy" variants={copyReveal} initial="hidden" animate="visible">
      <Motion.p className="eyebrow hero-eyebrow" variants={itemReveal}><span className="status-dot" /> Available for meaningful work <span className="eyebrow-divider">/</span> Sri Lanka</Motion.p>
      <Motion.h1 variants={itemReveal}>Code with<br /><span>character.</span></Motion.h1>
      <Motion.p className="hero-summary" variants={itemReveal}>I’m Aqueel Ishak — a full stack developer shaping practical ideas into thoughtful digital experiences.</Motion.p>
      <Motion.div className="hero-actions" variants={itemReveal}>
        <a className="button button-light" href="#projects">Explore selected work <ArrowDownRight size={17} /></a>
        <a className="hero-text-link" href="#contact">Let’s talk <ArrowUpRight size={16} /></a>
      </Motion.div>
      <Motion.div className="hero-footnote" variants={itemReveal}><span>01 / 05</span><span>Independent developer · Web & software</span></Motion.div>
    </Motion.div>
    <Motion.div className="hero-portrait" initial={{ opacity: 0, scale: 1.06, x: 28 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
      <img src="/aqueel-portrait.png" alt="Aqueel Ishak, seated in a black-and-white portrait" />
      <div className="portrait-note"><span>AI</span><span>Building<br />with intent.</span></div>
      <span className="portrait-index">PERSONAL PORTFOLIO · 2026</span>
    </Motion.div>
    <a className="hero-scroll" href="#about" aria-label="Scroll to about section"><span>Scroll to explore</span><ArrowDownRight size={16} /></a>
  </section>
);

export default Hero;
