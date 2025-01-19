import PropTypes from "prop-types"; // Import PropTypes for validation
import { Link } from 'react-scroll';
import logo from "../assets/sslogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const Navbar = ({ isDarkMode }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full text-white z-50 ${
        isDarkMode ? "bg-gradient-to-r from-gray-900 to-gray-1000" : "bg-gradient-to-r from-gray-900 to-gray-950 bg-opacity-100"
      } bg-opacity-100`}
    >
      <div className={`container mx-auto flex justify-between items-center py-6 px-8 ${
        isDarkMode ? "text-white font-poppins font-light" : "text-white font-poppins font-light" 
      }`}>
        <div className="hidden md:block flex flex-shrink-0 items-center">
          <a href="https://portfolio-shofwan.vercel.app/">
            <img className="h-6" src={logo} alt="logo" />
          </a>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex flex-col md:flex-row gap-6 font-poppins">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="text-primary-skyblue font-poppins font-medium underline decoration-primary-skyblue decoration-2 decoration-offset-[1rem] underline-offset-[0.5rem]"
                className="hover:text-primary-skyblue cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="text-primary-skyblue font-poppins font-medium underline decoration-primary-skyblue decoration-2 decoration-offset-[1rem] underline-offset-[0.5rem]"
                className="hover:text-primary-skyblue cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="text-primary-skyblue font-poppins font-medium underline decoration-primary-skyblue decoration-2 decoration-offset-[1rem] underline-offset-[0.5rem]"
                className="hover:text-primary-skyblue cursor-pointer"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="text-primary-skyblue font-poppins font-medium underline decoration-primary-skyblue decoration-2 decoration-offset-[1rem] underline-offset-[0.5rem]"
                className="hover:text-primary-skyblue cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="text-primary-skyblue font-poppins font-medium underline decoration-primary-skyblue decoration-2 decoration-offset-[1rem] underline-offset-[0.5rem]"
                className="hover:text-primary-skyblue cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/shofwanshiddiq/" target="_blank">
            <FaLinkedin className="hover:text-primary-skyblue transition-colors duration-300 cursor-pointer" />
          </a>
          <a href="https://www.github.com/shofwanshiddiq/">
            <FaGithub className="hover:text-primary-skyblue transition-colors duration-300 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/shofwanshiddiq/">
            <FaInstagram className="hover:text-primary-skyblue transition-colors duration-300 cursor-pointer" />
          </a>
        </div>
      </div>
    </nav>
  );
};

// PropTypes validation for isDarkMode
Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired, // Ensure isDarkMode is a boolean and is required
};

