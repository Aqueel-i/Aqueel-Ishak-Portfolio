import React, { useEffect } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <Motion.div className="project-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
        <Motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title"
          initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .98 }} onClick={(event) => event.stopPropagation()}>
          <button className="project-modal-close" type="button" onClick={onClose} aria-label="Close project details"><X size={20} /></button>
          <p className="eyebrow"><span className="section-number">PROJECT DETAIL</span></p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p className="project-modal-description">{project.details}</p>
          <div className="project-modal-tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className="project-modal-actions">
            <a href={project.link} target="_blank" rel="noopener noreferrer"><Github size={16} /> Source code <ArrowUpRight size={16} /></a>
            {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live project <ArrowUpRight size={16} /></a>}
          </div>
        </Motion.div>
      </Motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
