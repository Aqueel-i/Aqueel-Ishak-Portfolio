import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["about", "About"], ["skills", "Capabilities"], ["projects", "Work"], ["resume", "Résumé"],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <a className="wordmark" href="#home" aria-label="Aqueel Ishak, home"><span className="wordmark-mark">A</span><span>AQUEEL ISHAK</span></a>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([id, label], index) => <a key={id} href={`#${id}`}><span>0{index + 1}</span>{label}</a>)}
          <a className="nav-contact" href="#contact">Start a conversation <ArrowUpRight size={15} /></a>
        </nav>
        <button type="button" className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        {links.map(([id, label], index) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)}>Start a conversation <ArrowUpRight size={16} /></a>
      </nav>}
    </header>
  );
};

export default Navbar;
