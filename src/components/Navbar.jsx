import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

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

  // Auto-close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (open) setOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-blue-50 to-white/90 shadow-md backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-bold text-blue-700 cursor-pointer"
          onClick={() => scroll.scrollToTop()}
        ></h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium text-gray-700">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={`cursor-pointer hover:text-blue-600 transition duration-200 hover:scale-105 ${active === item.to ? "text-blue-600 font-semibold" : ""
                }`}
              onSetActive={() => setActive(item.to)}
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
        ></div>
      )}

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transition-transform duration-300 transform ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center px-5 py-5 border-b">
          <h2 className="text-lg font-semibold text-blue-700">Navigation</h2>
          <button onClick={toggleMenu}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 space-y-6 text-gray-800 text-lg">
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
      </div>
    </header>
  );
};

export default Navbar;
