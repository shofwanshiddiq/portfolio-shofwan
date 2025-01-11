import { motion } from "framer-motion"
import website from "../assets/project-website.png"

export const Project = () => {
  return (
    <div className="flex items-center justify-center">
            <div className="justify-left w-2/3 font-poppins font-light text-[0.9rem]">
                <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0 }}  className="mb-8 text-2xl">Projects</motion.h1>
                <div className="hover:bg-primary-skyblue hover:bg-opacity-5 flex mb-5 py-10 px-5 rounded-md">
                    <div>
                         <motion.img  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 1 }}  className="h-[30vh]" src={website} alt="experience" />
                    </div>
                    <div className="ml-5 w-2/3">
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
                        <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5">Build and manage user interface and experience for web application and website</motion.div> 
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-5">
                        <div className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-5 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                       Check This Out
                        </div>
                        <div className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-5 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        See Full Repositories
                        </div>
                        </motion.div>
                    </div>
                </div>
                <div className="hover:bg-primary-skyblue hover:bg-opacity-5 flex mb-5 py-10 px-5 rounded-md">
                    <div>
                         <motion.img  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 1 }}  className="h-[30vh]" src={website} alt="experience" />
                    </div>
                    <div className="ml-5 w-2/3">
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
                        <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5">Build and manage user interface and experience for web application and website</motion.div> 
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-5">
                        <div className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-5 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                       Check This Out
                        </div>
                        <div className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-5 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        See Full Repositories
                        </div>
                        </motion.div>
                    </div>
                </div>
                <div className="hover:bg-primary-skyblue hover:bg-opacity-5 flex mb-5 py-10 px-5 rounded-md">
                    <div>
                         <motion.img  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 1 }}  className="h-[30vh]" src={website} alt="experience" />
                    </div>
                    <div className="ml-5 w-2/3">
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }} ><a className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent font-poppins font-medium text-[1.2rem]">Minova Mobile Apps</a></motion.div>
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-5">
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-purple-900 to-purple-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                       .NET Maui
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        RESTful API
                        </div>
                        </motion.div>
                        <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5">Build and manage user interface and experience for web application and website</motion.div> 
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-5">
                        <div className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-5 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                       Check This Out
                        </div>
                        <div className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-5 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        See Full Repositories
                        </div>
                        </motion.div>
                    </div>
                </div>
                <div className="hover:bg-primary-skyblue hover:bg-opacity-5 flex mb-5 py-10 px-5 rounded-md">
                    <div>
                         <motion.img  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 1 }}  className="h-[30vh]" src={website} alt="experience" />
                    </div>
                    <div className="ml-5 w-2/3">
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }} ><a className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent font-poppins font-medium text-[1.2rem]">Minova E-Commerce</a></motion.div>
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
                        <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5">Build and manage user interface and experience for web application and website</motion.div> 
                        <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-5">
                        <div className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-5 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                       Check This Out
                        </div>
                        <div className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-5 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        See Full Repositories
                        </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
  )
}
