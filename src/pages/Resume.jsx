import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight, FileText, X } from "lucide-react";

const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="resume" className="section resume-section">
      <Motion.div className="resume-mark" initial={{ opacity: 0, rotate: -15, scale: .8 }} whileInView={{ opacity: 1, rotate: 0, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 150, damping: 16 }}><FileText size={25} /><span>04</span></Motion.div>
      <Motion.div className="resume-copy" initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .7 }}>
        <p className="eyebrow">The longer version</p>
        <h2>Want the<br /><span>full story?</span></h2>
        <p className="body-copy">Take a look at my résumé for a closer view of my experience, education, and technical background.</p>
      </Motion.div>
      <Motion.div className="resume-actions" initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: .12, duration: .7 }}>
        <button className="resume-button resume-button-dark" type="button" onClick={() => setShowResume(true)}>View résumé <ArrowUpRight size={17} /></button>
        <a className="resume-button resume-button-outline" href="/AQUEEL%20ISHAK.pdf" download><ArrowDownToLine size={17} /> Download PDF</a>
      </Motion.div>
      {showResume && <div className="resume-overlay" role="dialog" aria-modal="true" aria-label="Resume preview" onClick={() => setShowResume(false)}>
        <div className="resume-dialog" onClick={(event) => event.stopPropagation()}>
          <button className="resume-close" type="button" aria-label="Close resume preview" onClick={() => setShowResume(false)}><X size={21} /></button>
          <iframe src="/AQUEEL%20ISHAK.pdf" title="Aqueel Ishak résumé" />
        </div>
      </div>}
    </section>
  );
};

export default Resume;
