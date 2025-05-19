import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const allProjects = [
  {
    title: "Polling System",
    description: "Real-time polling system for events.",
    tech: ["php", "tailwindcss", "Chart.js"],
    image: "/images/project.png",
    details: "Create polls, view results, and manage users, all in real-time, with a user-friendly interface, and secure authentication, and data storage, ensuring a seamless experience for both poll creators and participants.",
    link: "https://github.com/Aqueel-i/Polling-System.git",
  },
  {
    title: "A Login Page",
    description: "Simple login page with validation.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/project.png",
    details: "A simple login page with validation and error messages, using HTML, CSS, and JavaScript, with a responsive design and user-friendly interface, ensuring a seamless experience across devices.",
    link: "https://github.com/Aqueel-i/Just-a-Login-Page.git",
  },
  {
    title: "Green Leaf Hospital",
    description: "Hospital management system with appointment booking.",
    tech: ["python", "flask", "Chart.js", "react", "tailwindcss"],
    image: "/images/project.png",
    details: "A comprehensive hospital management system with appointment booking, patient records, and doctor management, built using Python Flask and React, with a user-friendly interface and secure data handling, ensuring efficient hospital operations.",
    link: "https://github.com/Aqueel-i/Green-Leaf-Hospital.git",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing skills and projects.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/images/project.png",
    details: "Interactive and responsive personal portfolio website.",
    link: "https://github.com/Aqueel-i/Aqueel-Ishak-Portfolio.git",
  },
  {
    title: "Expense Tracker",
    description: "Track your expenses visually and categorically.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/project.png",
    details: "LocalStorage-based tracking with pie charts and filtering, and a user-friendly interface, ensuring easy management of personal finances, with a focus on visual representation and categorization of expenses.",
    link: "https://github.com/Aqueel-i/Expense-Tracker.git",
  },
  {
    title: "Doctor Roster Generator",
    description: "Automate doctor roster creation for hospitals.",
    tech: ["FastAPI", "React"],
    image: "/images/project.png",
    details: "Takes inputs and generates non-overlapping rosters. Skips weekends, and ensures no doctor is assigned more than 3 shifts in a week. The system is designed to be user-friendly, with a focus on efficiency and accuracy in roster generation.",
    link: "https://github.com/Aqueel-i/Doctors-Roster-Generator.git",
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
    details: "One-to-one and group chats with typing indicators and themes.",
    link: "https://github.com/example/chat-app",
  },
  {
    title: "Blog CMS",
    description: "Simple content management system for blogs.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    image: "/images/project.png",
    details: "Admin dashboard to manage posts, categories, and users.",
    link: "https://github.com/example/blog-cms",
  },
  {
    title: "Weather App",
    description: "Get real-time weather updates.",
    tech: ["React", "OpenWeather API"],
    image: "/images/project.png",
    details: "Shows temperature, humidity, and forecast using external API.",
    link: "https://github.com/example/weather-app",
  },
  {
    title: "QR Code Generator",
    description: "Generate and download QR codes.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "/images/project.png",
    details: "Create QR codes for text/URL and export as PNG.",
    link: "https://github.com/example/qr-generator",
  },
  {
    title: "Image Gallery",
    description: "Responsive image gallery with filters.",
    tech: ["React", "Tailwind"],
    image: "/images/project.png",
    details: "Images loaded from JSON with tag-based filtering.",
    link: "https://github.com/example/image-gallery",
  },
  {
    title: "Authentication System",
    description: "JWT-based login and register flow.",
    tech: ["Node.js", "Express", "MongoDB"],
    image: "/images/project.png",
    details: "Role-based authentication and access control.",
    link: "https://github.com/example/auth-system",
  },
  {
    title: "Notes App",
    description: "Sticky notes app with drag and drop.",
    tech: ["React", "LocalStorage"],
    image: "/images/project.png",
    details: "Persistent notes with drag, edit, and color features.",
    link: "https://github.com/example/notes-app",
  },
  {
    title: "Movie Search App",
    description: "Search for movies using the OMDB API.",
    tech: ["React", "API"],
    image: "/images/project.png",
    details: "Displays movies with poster, year, and description.",
    
    link: "https://github.com/example/movie-app",
  },];

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
              className={`bg-white rounded-2xl shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:bg-indigo-50 ${index % 3 === 0
                ? "row-span-2"
                : index % 2 === 0
                  ? "col-span-1"
                  : ""
                }`}
            >
              <h3 className="text-xl font-semibold mb-1 text-indigo-700">{project.title}</h3>
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
