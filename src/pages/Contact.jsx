import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-topline"><span className="eyebrow"><span className="section-number">05</span> Your turn</span><span className="contact-orbit">AI / 2026</span></div>
    <Motion.div className="contact-main" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>
      <p className="eyebrow contact-eyebrow">Have a good one in mind?</p>
      <h2>Let’s make<br /><span>it happen.</span></h2>
      <p className="contact-copy">Tell me about the idea, the challenge, or the thing you can’t stop thinking about. I’d love to hear it.</p>
      <a className="button button-accent" href="mailto:aqueel.ik@gmail.com"><Mail size={17} /> Send me an email <ArrowUpRight size={17} /></a>
    </Motion.div>
    <div className="contact-bottom"><span>GOOD THINGS START WITH A HELLO</span><a href="#home">Back to the top ↑</a></div>
  </section>
);

export default Contact;
