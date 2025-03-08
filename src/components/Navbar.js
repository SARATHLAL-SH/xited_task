import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about"); // Default active section
  const navigate = useNavigate();

  const navLinks = [
    { name: "About", path: "about" },
    { name: "Products", path: "products" },
    { name: "Recipes", path: "recipes" },
    { name: "Blog", path: "blog" },
    { name: "Contact", path: "contact" },
  ];

  const scrollToSection = (id) => {
    navigate(`#${id}`); // Updates the URL without reloading

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        setActiveSection(id);
        const navbarHeight = 166; // Adjust based on your navbar height
        const y = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100); // Small delay ensures correct positioning

    setMenuOpen(false);
  };

  // Detect scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "about"; // Default to About

      navLinks.forEach((link) => {
        const section = document.getElementById(link.path);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionBottom = section.getBoundingClientRect().bottom;

          if (sectionTop < 180 && sectionBottom > 180) {
            // If section is near the top of the viewport
            currentSection = link.path;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-[#FCB34A] p-4 h-[166px] flex items-center fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="NADURA Logo" className="w-[101px]" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 text-2xl lg:text-[30px] xl:text-[35px]">
          {navLinks.map((link) => (
            <li key={link.path}>
              <button
                onClick={() => scrollToSection(link.path)}
                className={`font-afterglow px-3 py-2 rounded-md transition-all ${
                  activeSection === link.path
                    ? "bg-white text-orange-600 font-bold"
                    : "text-white hover:text-orange-400"
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-[166px] left-0 w-full bg-[#FCB34A] transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-[200%]"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6 text-[28px]">
          {navLinks.map((link) => (
            <li key={link.path}>
              <button
                onClick={() => scrollToSection(link.path)}
                className={`font-afterglow px-3 py-2 rounded-md transition-all ${
                  activeSection === link.path
                    ? "bg-white text-orange-600 font-bold"
                    : "text-white hover:text-orange-400"
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
