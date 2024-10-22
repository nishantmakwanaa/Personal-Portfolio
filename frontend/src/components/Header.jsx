import React, { useEffect } from "react";
import { showMenu, init, toggleDarkMode } from "../utils/utils";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    init();
    showMenu("nav-toggle", "nav-menu");
  }, []);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div className="theme-switch" onClick={toggleDarkMode}>
          <i className="bx bx-moon" id="icon-moon"></i>
          <i className="bx bx-sun" id="icon-sun"></i>
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <span
                className="nav__link"
                onClick={() => scrollToSection("home")}
              >
                Home
              </span>
            </li>
            <li className="nav__item">
              <span
                className="nav__link"
                onClick={() => scrollToSection("about")}
              >
                About
              </span>
            </li>
            <li className="nav__item">
              <span
                className="nav__link"
                onClick={() => scrollToSection("resume")}
              >
                Resume
              </span>
            </li>
            <li className="nav__item">
              <span
                className="nav__link"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </span>
            </li>
            <li className="nav__item">
              <span
                className="nav__link"
                onClick={() => scrollToSection("achievements")}
              >
                Achievements
              </span>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;