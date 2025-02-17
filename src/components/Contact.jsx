
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope   } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center md:text-left justify-left  md:w-2/6 font-poppins font-light text-[0.9rem]">
            <h1 className="mb-8 text-2xl">Contact</h1>
            <a className="flex hover:text-primary-skyblue transition-colors duration-300  hover:cursor-pointer">
                <FaEnvelope  className="cursor-pointer text-2xl" />
                <h2 className="mb-5 ml-4">shofwanjimenez@gmail.com</h2>
            </a>
            <a href="https://www.linkedin.com/in/shofwanshiddiq/" target="_blank"  className="flex hover:text-primary-skyblue transition-colors duration-300  hover:cursor-pointer">
                <FaLinkedin className="cursor-pointer text-2xl" />
                <h2 className="mb-5 ml-4">shofwanshiddiq</h2>   
            </a>
            <a href="https://www.github.com/shofwanshiddiq/" target="_blank"  className="flex hover:text-primary-skyblue transition-colors duration-300 hover:cursor-pointer">
                <FaGithub className=" cursor-pointer text-2xl" />
                <h2 className="mb-5 ml-4">shofwanshiddiq</h2>
            </a>
            <a href="https://www.instagram.com/shofwanshiddiq/" target="_blank" className="flex hover:text-primary-skyblue transition-colors duration-300 hover:cursor-pointer">
                <FaInstagram className=" cursor-pointer text-2xl" />
                <h2 className="mb-5 ml-4">shofwanshiddiq</h2>
            </a>
    </div>
    </div>
  )
}
