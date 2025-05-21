import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react"; // Eye icon
import ProjectModal from "./ProjectModal";

const allProjects = [
  {
    title: "Online Exam Portal",
    description: "A full-stack online exam portal with role-based access and exam management.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Router", "Context API"],
    image: "/images/online-exam-portal.png",
    details: "An online exam portal supporting admin and student roles, exam creation, question management, and secure login with smooth animations and protected routes.",
    link: "https://github.com/yourusername/online-exam-portal",
    live: "https://online-exam-portal-bice.vercel.app"
  },
  {
    title: "Polling System",
    description: "Real-time polling system for events.",
    tech: ["php", "tailwindcss", "Chart.js"],
    image: "/images/project.png",
    details: "Create polls, view results, and manage users...",
    link: "https://github.com/Aqueel-i/Polling-System.git",
    live: "https://polling-system-eta.vercel.app/"
  },
  {
    title: "A Login Page",
    description: "Simple login page with validation.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/project.png",
    details: "A simple login page with validation and error messages...",
    link: "https://github.com/Aqueel-i/Just-a-Login-Page.git",
    live: "https://just-a-login-page.vercel.app/"
  },
  {
    title: "Green Leaf Hospital",
    description: "Hospital management system with appointment booking.",
    tech: ["python", "flask", "Chart.js", "react", "tailwindcss"],
    image: "/images/project.png",
    details: "A comprehensive hospital management system...",
    link: "https://github.com/Aqueel-i/Green-Leaf-Hospital.git",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing skills and projects.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/images/project.png",
    details: "Interactive and responsive personal portfolio website.",
    link: "https://github.com/Aqueel-i/Aqueel-Ishak-Portfolio.git",
    live: "https://aqueel-ishak.vercel.app/"
  },
  {
    title: "Expense Tracker",
    description: "Track your expenses visually and categorically.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/project.png",
    details: "LocalStorage-based tracking with pie charts and filtering...",
    link: "https://github.com/Aqueel-i/Expense-Tracker.git",
    live: "https://expense-tracker-lime-phi.vercel.app/"
  },
  {
    title: "Doctor Roster Generator",
    description: "Automate doctor roster creation for hospitals.",
    tech: ["FastAPI", "React"],
    image: "/images/project.png",
    details: "Takes inputs and generates non-overlapping rosters...",
    link: "https://github.com/Aqueel-i/Doctors-Roster-Generator.git",
    live: "https://doctors-roster-generator.vercel.app/"
  },
  {
    title: "To-Do List (WPF)",
    description: "Modern to-do desktop app using .NET WPF.",
    tech: ["C#", "WPF", ".NET"],
    image: "/images/project.png",
    details: "Supports CRUD, categories, filtering, and SQLite backend.",
    link: "https://github.com/example/wpf-todo",
  },
  {
    title: "Chat App",
    description: "Real-time chat with WebSockets.",
    tech: ["Node.js", "Socket.io", "React"],
    image: "/images/project.png",
    details: "One-to-one and group chats with typing indicators...",
    link: "https://github.com/example/chat-app",
  },
  {
    title: "File Organizer",
    description: "Organize files by type and date.",
    tech: ["Python", "Tkinter", "ttkbootstrap"],
    image: "/images/project.png",
    details: "Drag-and-drop interface for organizing files and folders.",
    link: "https://github.com/Aqueel-i/file-organizer.git",
    live: "https://github.com/Aqueel-i/file-organizer/releases/download/v1.0.0/FileOrganizerSetup.exe"
  },
  {
    title: "Travel Booking App",
    description: "Book flights and hotels with real-time availability.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    image: "/images/project.png",
    details: "Search and book flights and hotels with real-time availability and pricing.",
    link: "https://github.com/Aqueel-i/indo-travi.git",
    live: "https://indo-travi.vercel.app/"
  },
  {
    title: "Library Management System",
    description: "Manage library books and members.",
    tech: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/images/project.png",
    details: "CRUD operations for books, members, and transactions with a web interface and reporting features for tracking book availability and member activity.",
    link: "https://github.com/Aqueel-i/Library-Management-System.git",
  },
  {
    title: "Supermarket Management System II",
    description: "Manage supermarket operations.",
    tech: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript", "Layered Architecture"],
    image: "/images/project.png",
    details: "Manage products, sales, and inventory with a web interface and reporting features for tracking sales and inventory levels over time.",
    link: "https://github.com/Aqueel-i/Supermarket-Management-System_LAYERED-Architecture.git",
  },
  {
    title: "Super Market Management System I",
    description: "Manage supermarket operations.",
    tech: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript", "MVC"],
    image: "/images/project.png",
    details: "Manage products, sales, and inventory with a web interface and reporting features.",
    link: "https://github.com/Aqueel-i/Supermarket-Management-System_MVC-Architecture.git",
  },
  {
    title: "Employee Management System",
    description: "Manage employee records and payroll.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/images/project.png",
    details: " CRUD operations for employees, departments, and payroll, with a web interface for easy management and reporting features for tracking employee performance and attendance.",
    link: "https://github.com/Aqueel-i/Employee-Management-System.git",
  },
  {
    title: "Student Marks Management System",
    description: "Manage student marks and generate reports.",
    tech: ["Java"],
    image: "/images/project.png",
    details: "A Java-based system for managing student marks, generating reports and more,",
    link: "https://github.com/Aqueel-i/Student-Marks-Management-System.git",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-8">
          Projects
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`bg-white rounded-2xl shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:bg-indigo-50 ${index % 3 === 0 ? "row-span-2" : index % 2 === 0 ? "col-span-1" : ""
                }`}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-semibold text-indigo-700">
                  {project.title}
                </h3>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:text-indigo-700"
                    onClick={(e) => e.stopPropagation()}
                    title="Live Preview"
                  >
                    <Eye className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="text-gray-600 text-sm mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs bg-indigo-100 text-indigo-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
