import React from "react";
import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 backdrop-blur-sm bg-black/20 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <img
          src={project.image}
          alt={project.title}
          className="rounded mb-4"
        />
        <p className="text-gray-600 mb-2">{project.details}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 font-medium hover:underline"
        >
          View on GitHub →
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
