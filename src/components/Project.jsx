import { motion } from "framer-motion"
import website from "../assets/project-website.png"
import enchantre from "../assets/project-enchantre.png"
import mobile from "../assets/project-mobile.png"
import ecommerce from "../assets/project-ecommerce.png"
import { project_portfolio, project_enchantre, project_mobile, project_ecommerce }  from "../constants/index.js"

export const Project = () => {
  return (
    <div className="flex items-center justify-center">
            <div className="justify-left w-full md:w-2/3 font-poppins font-light text-[0.9rem] mb-40   mt-20">
                <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0 }}  className="mb-8 text-2xl">Projects</motion.h1>
                <div className="flex flex-col md:flex-row mb-3 py-2 px-2">
                    <div>
                         <motion.img  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 1 }}  className="h-[30vh] mt-5" src={website} alt="experience" />
                    </div>
                    <div className="rounded-md hover:bg-primary-skyblue hover:bg-opacity-5 ml-0 md:ml-5 md:w-2/3 py-2 px-4">
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }} ><a className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent font-poppins font-medium text-[1.2rem]">Portfolio Website</a></motion.div>
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-5">
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-purple-800 to-purple-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                       Vite
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-blue-950 to-blue-800 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        React
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-blue-700 to-blue-400 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        Tailwind CSS
                        </div>
                        </motion.div>
                        <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5 whitespace-pre-line">{project_portfolio}</motion.div> 
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-5">
                        <a href="https://portfolio-shofwan.vercel.app/"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-5 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                       Check This Out
                        </a>
                        <a href="https://github.com/shofwanshiddiq/portfolio-shofwan/"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-5 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        See Full Repositories
                        </a>
                        </motion.div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row mb-3 py-5 px-2">
                    <div>
                         <motion.img  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 1 }}  className="h-[30vh] mt-5" src={enchantre} alt="experience" />
                    </div>
                    <div className="hover:bg-primary-skyblue hover:bg-opacity-5 ml-0 md:ml-5 md:w-2/3  rounded-md  py-2 px-4">
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }} ><a className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent font-poppins font-medium text-[1.2rem]">Enchantre Digital Invitation</a></motion.div>
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-5">
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                       HTML & CSS5
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-purple-950 to-blue-800 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        PHP
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-red-950 to-red-800 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        cPanel
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-800 to-yellow-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        MySQL
                        </div>
                        </motion.div>
                        <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5 whitespace-pre-line">{project_enchantre}</motion.div> 
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-5">
                        <a href="https://www.enchantre.com"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-5 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                       Check This Out
                        </a>
                        <a href="https://github.com/shofwanshiddiq/enchantre"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-5 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        See Full Repositories
                        </a>
                        </motion.div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row mb-3 py-5 px-2">
                    <div>
                         <motion.img  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 1 }}  className="h-[30vh] mt-5" src={mobile} alt="experience" />
                    </div>
                    <div className="rounded-md hover:bg-primary-skyblue hover:bg-opacity-5 ml-0 md:ml-5 md:w-2/3 py-2 px-4">
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }} ><a className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent font-poppins font-medium text-[1.2rem]">ERP Mobile Apps</a></motion.div>
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-5">
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-purple-900 to-purple-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                       .NET Maui
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        RESTful API
                        </div>
                        </motion.div>
                        <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5 whitespace-pre-line">{project_mobile}</motion.div> 
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-5">
                        <a href="https://www.minovais.com"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-5 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                       Check This Out
                        </a>
                        <a href="https://github.com/shofwanshiddiq/mobile-apps"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-5 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        See Full Repositories
                        </a>
                        </motion.div>
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row mb-3 py-5 px-2">
                    <div>
                         <motion.img  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 1 }}  className="h-[30vh] mt-5" src={ecommerce} alt="experience" />
                    </div>
                    <div className="rounded-md hover:bg-primary-skyblue hover:bg-opacity-5 ml-0 md:ml-5 md:w-2/3 py-2 px-4">
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }} ><a className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent font-poppins font-medium text-[1.2rem]">E-Commerce Web App</a></motion.div>
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-5">
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-purple-900 to-purple-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                       .NET Frameworks
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        RESTful API
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        HTML & CSS5
                        </div>
                        </motion.div>
                        <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5  whitespace-pre-line">{project_ecommerce}</motion.div> 
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-5">
                        <a  href="https://www.minovais.com" target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-5 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                       Check This Out
                        </a>
                        <a href="https://github.com/shofwanshiddiq/ecommerce-apps"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-5 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        See Full Repositories
                        </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
  )
}
