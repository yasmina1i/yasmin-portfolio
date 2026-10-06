import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        YA
      </a>

      <div className="nav-links">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#skills">Stack</a>
        <a href="#certifications">Certifications</a>
        <a href="#leadership">Leadership</a>
        <a href="#contact">Contact</a>
      </div>

      <button
        className={`menu-button ${menuOpen ? "menu-open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#education" onClick={closeMenu}>
          Education
        </a>

        <a href="#skills" onClick={closeMenu}>
          Stack
        </a>

        <a href="#certifications" onClick={closeMenu}>
          Certifications
        </a>

        <a href="#leadership" onClick={closeMenu}>
          Leadership
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;