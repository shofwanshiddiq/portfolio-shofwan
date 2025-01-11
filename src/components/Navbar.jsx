import logo from "../assets/sslogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full  text-white z-50 bg-gradient-to-r from-gray-900 to-gray-1000 bg-opacity-90">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <img className="h-6" src={logo} alt="logo" />
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex gap-6 font-poppins font-light">
            <li><a href="#home" className="hover:text-primary-skyblue">Home</a></li>
            <li><a href="#about" className="hover:text-primary-skyblue">About</a></li>
            <li><a href="#experience" className="hover:text-primary-skyblue">Experience</a></li>
            <li><a href="#projects" className="hover:text-primary-skyblue">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary-skyblue">Contact</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-2xl">
          <FaLinkedin className="hover:text-primary-skyblue transition-colors duration-300 cursor-pointer" />
          <FaGithub className="hover:text-primary-skyblue transition-colors duration-300 cursor-pointer" />
          <FaInstagram className="hover:text-primary-skyblue transition-colors duration-300 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};
