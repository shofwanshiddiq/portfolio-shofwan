import experience from "../assets/experience.png"
import { motion } from "framer-motion"

export const Experience = () => {
  return (
    <div className="flex items-center justify-center mb-40">
        <div className="justify-left w-full md:w-3/5 font-poppins font-light text-[0.9rem]   mt-20">
            <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0 }}  className="mb-8 text-2xl">My Experience </motion.h1>
            <div className="hover:bg-primary-skyblue hover:bg-opacity-5 flex flex-col md:flex-row mb-20 py-5 px-5 rounded-md">
                <div>
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0.2 }}  className="text-primary-skyblue mb-10">Sep 2022 - Present</motion.div>
                     <motion.img whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 1.4 }}  className="h-[40vh] hidden md:block" src={experience} alt="experience" />
                </div>
                <div className="ml-0 md:ml-20 md:w-2/3">
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }} ><a className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent font-poppins font-medium text-[1.2rem]">Software Engineer </a>at <a>PT Minova Infotech Solutions</a></motion.div>
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-10">
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-purple-900 to-purple-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                    .NET Frameworks
                    </div>
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-red-900 to-red-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                    SQL Server
                    </div>
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                    RESTful API
                    </div>
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-blue-900 to-blue-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                    ExtJS
                    </div>
                    </motion.div>
                    <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="font-poppins font-medium">Front-End</motion.div>
                    <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5">Collaborators for build and manage user interface and experience for Minova web application.</motion.div> 
                    <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.9 }}  className="font-poppins font-medium">Back-End</motion.div>
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.9 }}  className="text-[0.8rem] mb-5">Collaborators for manage ASP.NET API. Manage MS SQL Server and mySQL databases supporting web applications and website. Perform data calculations for reporting such as accounting, time-management and many more modules</motion.div> 
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 1.1 }}  className="font-poppins font-medium">Mobile Apps</motion.div>
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 1.1 }}  className="text-[0.8rem] mb-5">Extend the web app to include Employee Self-Service features, such as photo and location capture for attendance, leave requests, logistics management, and supervisor approvals, providing easier access for employees.</motion.div> 
                </div>
            </div>
            
            <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0 }}  className="mb-8 text-2xl">Courses </motion.h1>
            <div  className="hover:bg-primary-skyblue hover:bg-opacity-5 flex flex flex-col md:flex-row mb-20 py-5 px-5 rounded-md">
                <div>
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0.2 }}  className="text-primary-skyblue mb-10">Nov 2024 - Present</motion.div>
                </div>
                <div  className="ml-0 md:ml-20 md:w-2/3">
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }} ><a className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent font-poppins font-medium text-[1.2rem]">Backend Golang Developer </a>at Dibimbing</motion.div>
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-10">
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-blue-900 to-blue-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                    Golang
                    </div>
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-900 to-yellow-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                    MySQL
                    </div>
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-green-900 to-green-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                    MongoDB
                    </div>
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-blue-950 to-blue-700 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                    Docker
                    </div>
                    </motion.div>
                    <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5">Focusing on golang backend development integrate with MySQL for relational database and MongoDB for non-relational database through Restful API, also utilizing Docker for containerization.</motion.div> 
                </div>
            </div>
        </div>
    </div>
  )
}
