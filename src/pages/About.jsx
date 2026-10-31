import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const About = () => (
  <section id="about" className="section about-section">
    <Motion.div className="section-heading" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
      <p className="eyebrow"><span className="section-number">01</span> The person behind the pixels</p>
      <h2>Thoughtful work.<br /><span>Useful by design.</span></h2>
    </Motion.div>
    <Motion.div className="about-content" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
      <p className="about-lede">Good software should feel clear, considered, and a little bit delightful.</p>
      <p className="body-copy">I’m a full stack developer who enjoys turning ideas into useful, approachable software. I work across frontend and backend technologies, with a focus on clean interfaces, reliable functionality, and learning something new with every project.</p>
      <a className="inline-link" href="#skills">More about how I work <ArrowUpRight size={16} /></a>
      <div className="about-stamp"><span>Curiosity</span><i>×</i><span>Craft</span><i>×</i><span>Code</span></div>
    </Motion.div>
  </section>
);

export default About;
