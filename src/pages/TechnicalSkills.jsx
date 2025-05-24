import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaCode,        // <-- replaced VS Code icon here
  FaJava,
  FaCuttlefish,  // optional, not needed unless you want more icons
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiDjango,
  SiBootstrap,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiFirebase,
  SiNpm,
  SiFigma,
  SiDocker,
  SiApachenetbeanside,
  SiSpringboot,
} from "react-icons/si";

const categorizedSkills = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-700" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    { name: "Python", icon: <FaPython className="text-yellow-600" /> },
    { name: "Django", icon: <SiDjango className="text-green-900" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-800" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "REST APIs", icon: <SiApachenetbeanside className="text-red-500" /> },
    { name: "Java", icon: <FaJava className="text-red-600" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-700" /> },
    { name: "C#", icon: <FaCode className="text-purple-800" /> }, // no official icon, used FaCode as substitute
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "VS Code", icon: <FaCode className="text-blue-600" /> },
    { name: "NPM", icon: <SiNpm className="text-red-600" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
    { name: "Linux", icon: <FaLinux className="text-black" /> },
  ],
};

const tabs = Object.keys(categorizedSkills);

const TechnicalSkills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

      {/* Tabs */}
      <div className="flex justify-center mb-8 gap-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeTab === tab
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categorizedSkills[activeTab].map((skill, i) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center bg-white shadow-md rounded-xl p-4 hover:scale-105 transition-transform"
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
