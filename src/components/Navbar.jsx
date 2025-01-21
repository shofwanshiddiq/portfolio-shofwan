import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import logo from "../assets/sslogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export const Navbar = ({ isDarkMode }) => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed left-0 w-full z-50 transition-transform duration-500 ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-900 to-gray-1000"
            : "bg-gradient-to-r from-gray-900 to-gray-950 bg-opacity-100"
        }`}
      >
        <div
          className={`container mx-auto flex justify-between items-center py-6 px-8 ${
            isDarkMode
              ? "text-white font-poppins font-light"
              : "text-white font-poppins font-light"
          }`}
        >
          {/* Logo */}
          <div className="hidden md:block flex flex-shrink-0 items-center">
            <a href="">
              <img className="h-6" src={logo} alt="logo" />
            </a>
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="flex flex-col md:flex-row gap-6 font-poppins">
              {["home", "about", "experience", "projects", "contact"].map(
                (section) => (
                  <li key={section}>
                    <Link
                      to={section}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      activeClass="text-primary-skyblue font-poppins font-medium underline decoration-primary-skyblue decoration-2 decoration-offset-[1rem] underline-offset-[0.5rem]"
                      className="hover:text-primary-skyblue cursor-pointer"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/shofwanshiddiq/"
              target="_blank"
            >
              <FaLinkedin className="hover:text-primary-skyblue transition-colors duration-300 cursor-pointer" />
            </a>
            <a href="https://www.github.com/shofwanshiddiq/">
              <FaGithub className="hover:text-primary-skyblue transition-colors duration-300 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/shofwanshiddiq/">
              <FaInstagram className="hover:text-primary-skyblue transition-colors duration-300 cursor-pointer" />
            </a>
            {/* Original Menu Icon */}
            <button
              onClick={toggleNavbar}
              className={`focus:outline-none ${
                isNavbarVisible ? "block" : "hidden"
              }`}
            >
              <FiMenu className="hover:text-primary-skyblue transition-colors duration-300 cursor-pointer" />
            </button>
          </div>
        </div>
      </nav>

      {/* New Menu Icon for Showing Navbar */}
      <button
        onClick={toggleNavbar}
        className={`fixed top-4 right-4 z-60 text-white text-2xl focus:outline-none ${
          isNavbarVisible ? "hidden" : "block"
        }`}
      >
        <FiMenu className="hover:text-primary-skyblue transition-colors duration-300 cursor-pointer" />
      </button>
    </>
  );
};

// PropTypes validation for isDarkMode
Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired, // Ensure isDarkMode is a boolean and is required
};
