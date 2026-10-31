import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Polling System",
    description: "A web app for creating polls and viewing results.",
    tech: ["PHP", "Tailwind CSS", "Chart.js"],
    details: "A polling application with tools to create polls and review the results.",
    link: "https://github.com/Aqueel-i/Polling-System.git",
    live: "https://polling-system-eta.vercel.app/",
  },
  {
    title: "Fitness Tracker",
    description: "A personal space to log workouts and follow progress.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    details: "A fitness tracking project for recording workouts, following progress, and setting goals.",
    link: "https://github.com/Aqueel-i/Fitness-Tracker.git",
    live: "https://fitness-tracker-psi-nine.vercel.app/",
  },
  {
    title: "Doctor Roster Generator",
    description: "A tool for generating doctor rosters.",
    tech: ["FastAPI", "React"],
    details: "A roster generation project designed to create schedules without overlapping assignments.",
    link: "https://github.com/Aqueel-i/Doctors-Roster-Generator.git",
    live: "https://doctors-roster-generator.vercel.app/",
  },
  {
    title: "Travel Booking App",
    description: "A travel booking interface for flights and hotels.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    details: "A travel booking project focused on searching and booking flights and hotels.",
    link: "https://github.com/Aqueel-i/indo-travi.git",
    live: "https://indo-travi.vercel.app/",
  },
  {
    title: "Library Management System",
    description: "A system for managing books, members, and lending activity.",
    tech: ["Java", "Spring Boot", "MySQL"],
    details: "A library management system covering books, members, and transactions, with reporting for availability and member activity.",
    link: "https://github.com/Aqueel-i/Library-Management-System.git",
  },
  {
    title: "Expense Tracker",
    description: "A lightweight app for tracking and reviewing expenses.",
    tech: ["HTML", "CSS", "JavaScript"],
    details: "A browser based expense tracker with local storage, charts, and filtering.",
    link: "https://github.com/Aqueel-i/Expense-Tracker.git",
    live: "https://expense-tracker-lime-phi.vercel.app/",
  },
  {
    title: "Green Leaf Hospital",
    description: "A hospital management project with appointment booking.",
    tech: ["Python", "Flask", "React", "Tailwind CSS"],
    details: "A hospital management project built with a Python and Flask backend and a React interface.",
    link: "https://github.com/Aqueel-i/Green-Leaf-Hospital.git",
  },
  {
    title: "File Organizer",
    description: "A desktop utility for organizing files and folders.",
    tech: ["Python", "Tkinter"],
    details: "A desktop file organizer with a drag and drop interface for arranging files and folders.",
    link: "https://github.com/Aqueel-i/file-organizer.git",
    live: "https://github.com/Aqueel-i/file-organizer/releases/download/v1.0.0/FileOrganizerSetup.exe",
  },
  {
    title: "Employee Management System",
    description: "A Java web app for employee and department records.",
    tech: ["Java", "Spring Boot", "MySQL"],
    details: "An employee management project with records for employees and departments, plus attendance and performance reporting.",
    link: "https://github.com/Aqueel-i/Employee-Management-System.git",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section work-section">
        <div className="work-heading">
          <div>
            <p className="eyebrow"><span className="section-number">03</span> Things I’ve put into the world</p>
            <h2>A few things<br /><span>made with care.</span></h2>
          </div>
          <div className="work-aside">
          <p className="body-copy">A selection of experiments, useful tools, and projects built to solve real problems.</p>
          <a href="https://github.com/Aqueel-i" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold transition">
            <Github size={18} /> More on GitHub <ArrowUpRight size={16} />
          </a>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <Motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: (index % 3) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -9 }}
              className={`project-card project-card-${index % 4}`}
            >
              <Motion.button type="button" onClick={() => setSelectedProject(project)} aria-label={`More about ${project.title}`} className={`project-art project-art-${index % 4}`} whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.985 }}>
                <span className="art-index">PROJECT / {String(index + 1).padStart(2, "0")}</span>
                <strong>{project.title}</strong>
                <span className="art-arrow"><ArrowUpRight size={20} /></span>
                <span className="art-orbit" />
              </Motion.button>
              <div className="project-info">
                <p className="project-kind">{project.tech.slice(0, 2).join(" / ")}</p>
                <button type="button" onClick={() => setSelectedProject(project)} className="project-title">{project.title}</button>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tech.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default Projects;
