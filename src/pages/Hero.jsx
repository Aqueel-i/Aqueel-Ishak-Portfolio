import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-gray-100"
        >
            {/* 👤 Image: No circle, no border, no shadow */}
            <motion.img
                src="/Aqueel Ishak.png"
                alt="Aqueel Ishak"
                className="w-100 h-auto mb-6 object-cover rounded-b-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            />

            <motion.h1
                className="text-4xl md:text-6xl font-bold text-indigo-700 mb-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Hi, I'm Aqueel Ishak
            </motion.h1>

            <motion.p
                className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                A passionate Full Stack Developer building beautiful web experiences.
            </motion.p>

            <motion.a
                href="#projects"
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                View Projects
            </motion.a>
        </section>
    );
};

export default Hero;
