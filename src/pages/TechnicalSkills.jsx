// components/TechnicalSkills.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaLinux,
  FaJava, FaDocker, FaDatabase, FaServer, FaCode, FaProjectDiagram,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiDjango, SiBootstrap,
  SiRedux, SiNextdotjs, SiExpress, SiFirebase, SiNpm, SiFigma, SiSpringboot,
  SiHibernate, SiJenkins, SiVscodium, SiNetlify, SiIntellijidea, SiJira,
} from "react-icons/si";

const categorizedSkills = {
  "Programming Languages & Frameworks": [
    { name: "Java", icon: <FaJava className="text-red-600" /> },
    { name: "Python", icon: <FaPython className="text-yellow-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-700" /> },
    { name: "Hibernate ORM", icon: <SiHibernate className="text-purple-700" /> },
    { name: "Django", icon: <SiDjango className="text-green-900" /> },
    { name: "JavaFX", icon: <FaCode className="text-blue-700" /> },
    { name: "JFoenix", icon: <FaProjectDiagram className="text-pink-600" /> },
  ],
  "Database Management & Tools": [
    { name: "MySQL", icon: <SiMysql className="text-blue-800" /> },
    { name: "JDBC", icon: <FaDatabase className="text-blue-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Database Management Systems", icon: <FaServer className="text-gray-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
  ],
  "Development Practices & Tools": [
    { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-pink-600" /> },
    { name: "NetBeans", icon: <SiNetlify className="text-blue-600" /> },
    { name: "VS Code", icon: <SiVscodium className="text-blue-600" /> },
    { name: "Design Patterns", icon: <SiJenkins className="text-yellow-600" /> },
    { name: "Agile Methodology", icon: <SiJira className="text-blue-500" /> },
    { name: "OOP", icon: <FaCode className="text-indigo-600" /> },
    { name: "MVC Architecture", icon: <FaCode className="text-indigo-600" /> },
    { name: "Web App Deployment", icon: <SiNetlify className="text-green-500" /> },
    { name: "Responsive Web Design", icon: <SiTailwindcss className="text-cyan-500" /> },
  ],
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-700" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  ],
  Backend: [
    { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    { name: "REST APIs", icon: <FaServer className="text-red-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  ],
  Tools: [
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "NPM", icon: <SiNpm className="text-red-600" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "Linux", icon: <FaLinux className="text-black" /> },
  ],
};

const skillGroups = {
  Frontend: ["Frontend", "Programming Languages & Frameworks"],
  Backend: ["Backend", "Programming Languages & Frameworks", "Database Management & Tools"],
  Tools: ["Tools", "Development Practices & Tools"],
};

const TechnicalSkills = () => {
  const [activeGroup, setActiveGroup] = useState("Frontend");
  const [activeCategory, setActiveCategory] = useState({
    Frontend: skillGroups["Frontend"][0],
    Backend: skillGroups["Backend"][0],
    Tools: skillGroups["Tools"][0],
  });

  const handleGroupChange = (group) => {
    setActiveGroup(group);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory((prev) => ({
      ...prev,
      [activeGroup]: category,
    }));
  };

  return (
    <section className="py-12 bg-gray-50 text-center" id="skills">
       <h2 className="text-3xl font-bold text-indigo-600 mb-4">Technical Skills</h2>

      {/* Group Tabs */}
      <div className="flex justify-center mb-6 gap-6 flex-wrap">
        {Object.keys(skillGroups).map((group) => (
          <button
            key={group}
            onClick={() => handleGroupChange(group)}
            className={`px-5 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
              activeGroup === group
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-indigo-100"
            }`}
          >
            {group}
          </button>
        ))}
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-8 gap-4 flex-wrap">
        {skillGroups[activeGroup].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
              activeCategory[activeGroup] === category
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto
        overflow-x-auto px-4 scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-200"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {categorizedSkills[activeCategory[activeGroup]].map((skill, i) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center bg-white shadow-md rounded-xl p-4 min-w-[120px] hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <motion.div
              className="text-4xl mb-2"
              whileHover={{ rotate: 10, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {skill.icon}
            </motion.div>
            <p className="text-sm font-medium text-gray-700">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
