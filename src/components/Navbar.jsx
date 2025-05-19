import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-blue-50 to-white/90 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 tracking-wide"></h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium text-gray-700">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-blue-600 transition duration-200 hover:scale-105"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
        ></div>
      )}

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-40 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4">
          <h2 className="text-lg font-semibold text-blue-600">Menu</h2>
          <button onClick={toggleMenu}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 px-6 py-6 text-gray-700">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="hover:text-blue-600 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
