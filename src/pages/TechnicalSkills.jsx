import React, { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const skillGroups = {
  Frontend: ["React", "JavaScript", "TypeScript", "HTML & CSS", "Tailwind CSS", "Next.js", "Redux", "Responsive design"],
  Backend: ["Java", "Spring Boot", "Python", "Node.js", "Express.js", "REST APIs", "MySQL", "MongoDB", "Firebase"],
  "Tools & practice": ["Git & GitHub", "Docker", "Postman", "Linux", "Figma", "IntelliJ IDEA", "Object-oriented design", "MVC architecture"],
};

const listReveal = { hidden: {}, visible: { transition: { staggerChildren: 0.055 } } };
const rowReveal = { hidden: { opacity: 0, x: 18 }, visible: { opacity: 1, x: 0, transition: { duration: 0.35 } } };

const TechnicalSkills = () => {
  const [activeGroup, setActiveGroup] = useState("Frontend");

  return (
    <section id="skills" className="section skills-section">
      <Motion.div className="skills-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
        <div>
          <p className="eyebrow"><span className="section-number">02</span> The toolkit</p>
          <h2>My kind of<br /><span>building blocks.</span></h2>
        </div>
        <p className="body-copy">A growing set of tools for designing and delivering complete digital products.</p>
      </Motion.div>
      <div className="skill-browser">
        <div className="skill-tabs" role="tablist" aria-label="Skill categories">
          {Object.keys(skillGroups).map((group, index) => <button type="button" role="tab" aria-selected={activeGroup === group} key={group} onClick={() => setActiveGroup(group)}><span>0{index + 1}</span>{group}<ArrowUpRight size={15} /></button>)}
        </div>
        <AnimatePresence mode="wait">
          <Motion.div key={activeGroup} className="skill-list" role="tabpanel" aria-label={activeGroup} variants={listReveal} initial="hidden" animate="visible" exit={{ opacity: 0, y: -8 }}>
            {skillGroups[activeGroup].map((skill, index) => <Motion.div className="skill-item" key={skill} variants={rowReveal}><span>{String(index + 1).padStart(2, "0")}</span><strong>{skill}</strong><i>↗</i></Motion.div>)}
          </Motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TechnicalSkills;
