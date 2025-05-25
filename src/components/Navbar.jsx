import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const toggleMenu = () => setOpen(!open);

  const navItems = [
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "resume", label: "Resume" },
    { to: "contact", label: "Contact" },
  ];

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (open) setOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur- bg-white/ transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-bold text-blue-700 cursor-pointer"
          onClick={() => scroll.scrollToTop()}
        >
          {/* Add your logo or name here if needed */}
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium text-black">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={`cursor-pointer transition-transform duration-300 hover:text-blue-400 hover:scale-105 ${active === item.to ? "text-blue-400 font-semibold" : ""
                }`}
              onSetActive={() => setActive(item.to)}
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>

        {/* Creative Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex flex-col justify-between items-center"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
              className="bg-white h-1 w-full rounded transition-all duration-300 origin-center"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="bg-white h-1 w-full rounded transition-all duration-300"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
              className="bg-white h-1 w-full rounded transition-all duration-300 origin-center"
            />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <motion.div
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
        />
      )}

      {/* Sliding Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ duration: 0.9 }}
        className="fixed top-0 right-0 h-full w-72 bg-white/6 z-50 shadow-2xl md:hidden rounded-l-4xl overflow-y-auto"
      >
        <div className="flex justify-between items-center px-6 py-6">
          <h2 className="text-lg font-semibold text-blue-700">Menu</h2>
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col px-6 space-y-6 text-gray-800 text-lg">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="hover:text-blue-600 transition cursor-pointer"
              onClick={() => {
                setOpen(false);
                setActive(item.to);
              }}
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
