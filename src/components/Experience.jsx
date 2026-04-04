import experience from "../assets/experience.png"
import website from "../assets/project-website.png"
// import protelindo from "../assets/protelindo.png"
import { motion } from "framer-motion"

export const Experience = () => {
  return (
    <div className="flex items-center justify-center mb-40">
        <div className="justify-left w-full md:w-3/5 font-poppins font-light text-[0.9rem]   mt-20">
            <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0 }}  className="mb-8 text-2xl">My Experience </motion.h1>
            <div className="hover:bg-primary-skyblue hover:bg-opacity-5 flex flex-col md:flex-row mb-20 py-5 px-5 rounded-md">
                <div>
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0.2 }}  className="text-primary-skyblue mb-10">Jun 2025 - Present</motion.div>
                    <motion.img whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 1.4 }}  className="h-[20vh] hidden md:block" src={website} alt="website" />
                </div>
                <div className="ml-0 md:ml-20 md:w-2/3">
                    {/* <motion.img whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }}  className="h-[7vh] hidden md:block mb-4 bg-white p-2" src={protelindo} alt="protelindo" /> */}
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }} ><a className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent font-poppins font-medium text-[1.2rem]">.NET Developer </a>at <a>Protelindo</a></motion.div>
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-10">
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-purple-900 to-purple-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                    .NET Frameworks
                    </div>
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-purple-900 to-purple-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                    .NET Core
                    </div>
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-red-900 to-red-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                    SQL Server
                    </div>
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-red-900 to-red-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                    PostgreSQL
                    </div>
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-blue-900 to-blue-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                    Typescript
                    </div>
                    </motion.div>
                    <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5">Manage and maintain internal support system applications using .NET Framework and Serenity Core, with SQL Server and REST API integration, to support daily operational activities used by 2000+ users while providing support by troubleshooting issues and delivering solutions.</motion.div> 
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.9 }}  className="text-[0.8rem] mb-5">Revamp and upgrade legacy applications from .NET Framework to .NET Core by rebuilding systems, redesigning into a microservices architecture, and implementing integrations with external applications, resulting in a more user-friendly system and fresh user interface with improved performance and scalability.</motion.div> 
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 1.1 }}  className="text-[0.8rem] mb-5">Collaborate with users to understand business requirements and translate them into technical solutions in applications.</motion.div> 
                </div>
            </div>

            <div className="hover:bg-primary-skyblue hover:bg-opacity-5 flex flex-col md:flex-row mb-20 py-5 px-5 rounded-md">
                <div>
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0.2 }}  className="text-primary-skyblue mb-10">Sep 2022 - May 2025</motion.div>
                     <motion.img whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 1.4 }}  className="h-[40vh] hidden md:block" src={experience} alt="experience" />
                </div>
                <div className="ml-0 md:ml-20 md:w-2/3">
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }} ><a className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent font-poppins font-medium text-[1.2rem]">IT Developer </a>at <a>PT Minova Infotech Solutions</a></motion.div>
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
                      <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5">Designed and built an e-commerce application, integrating it with MinovaES accounting and logistics modules. Enabling retail clients to purchase goods, supporting multiple Minova retail clients across Indonesia, and providing nationwide access for their customers.</motion.div> 
                    
                     <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.9 }}  className="text-[0.8rem] mb-5">Built the MinovaHR mobile app as an extension of the web application, streamlining employee access to self-service features. Implemented modules for location-based attendance tracking with photo capture, leave request and approval workflows, and logistics management. Successfully deployed to 500+ employees across multiple companies in Indonesia.</motion.div> 
               
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 1.1 }}  className="text-[0.8rem] mb-5">Managed the development and ongoing maintenance of the MinovaES front-end web application using a javascript framework ExtJS. Currently used daily by 20+ companies and 10.000+ users across Indonesia.</motion.div> 
                    
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 1.1 }}  className="text-[0.8rem] mb-5">Designed and built a web application for client support, enabling efficient management of ticketing systems submitted by clients.</motion.div> 
                </div>
            </div>
            
            <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0 }}  className="mb-8 text-2xl">Courses </motion.h1>

            <div  className="hover:bg-primary-skyblue hover:bg-opacity-5 flex flex flex-col md:flex-row mb-10 py-5 px-5 rounded-md">
                <div>
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0.2 }}  className="text-primary-skyblue mb-10">Dec 2025 - Jun 2026</motion.div>
                </div>
                <div  className="ml-0 md:ml-20 md:w-2/3">
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }} ><a className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent font-poppins font-medium text-[1.2rem]">Cybersecurity </a>at Dibimbing</motion.div>
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-2">
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-gray-500 to-gray-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                    Linux
                    </div>
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-blue-900 to-blue-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                    Kali Linux
                    </div>
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-4 rounded-md py-1 px-2 bg-gradient-to-r from-red-900 to-red-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                    Burpsuite
                    </div>
                    </motion.div>
                     <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }}  className="flex mt-2 mb-5 font-poppins font-medium">Batch 5</motion.div>
                    <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5">Learning cybersecurity fundamentals and offensive security practices, including governance, networking, cryptography, and penetration testing.</motion.div> 
                     <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5">Identification web and infrastructure vulnerabilities such as injection attacks, SSRF, broken access control, security misconfigurations, and DoS.</motion.div> 
                     <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5">Hands-on experiance in penetration testing, including vulnerability assessment, exploitation, reporting & mitigation.</motion.div> 
                    {<motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-2">
                        <a href="https://github.com/shofwanshiddiq/cybersecurity-portfolio-shofwan" target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                            Cybersecurity Portfolio
                        </a>
                        <a  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2  ml-2 py-1 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                            Certificate
                        </a>
                         <a   target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 ml-2 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                            Report Card
                        </a>
                    </motion.div> }
                </div>
            </div>
            <div  className="hover:bg-primary-skyblue hover:bg-opacity-5 flex flex flex-col md:flex-row mb-10 py-5 px-5 rounded-md">
                <div>
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0.2 }}  className="text-primary-skyblue mb-10">Nov 2024 - May 2025</motion.div>
                </div>
                <div  className="ml-0 md:ml-20 md:w-2/3">
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }} ><a className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent font-poppins font-medium text-[1.2rem]">Backend Golang Developer </a>at Dibimbing</motion.div>
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-2">
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
                     <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }}  className="flex mt-2 mb-5 font-poppins font-medium">Batch 2</motion.div>
                    <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5">Focusing on golang backend development integrate with MySQL for relational database and MongoDB for non-relational database through Restful API, also utilizing Docker for containerization.</motion.div> 
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-2">
                        <a href="https://dibimbing.id/certificate-validation?cn=201029GO02051814"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                            Certificate
                        </a>
                         <a href="https://dibimbing-lms-dev.s3.ap-southeast-1.amazonaws.com/1747322308828-P5-Shofwan.pdf"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 ml-2 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                            Report Card
                        </a>
                    </motion.div>
                </div>
            </div>
            <div  className="hover:bg-primary-skyblue hover:bg-opacity-5 flex flex flex-col md:flex-row mb-20 py-5 px-5 rounded-md">
                <div>
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0.2 }}  className="text-primary-skyblue mb-10">Jun 2025 - Jul 2025</motion.div>
                </div>
                <div  className="ml-0 md:ml-20 md:w-2/3">
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }} ><a className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent font-poppins font-medium text-[1.2rem]">English for Professional </a>at Dibimbing</motion.div>
                    <motion.div  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.5 }}  className="flex mt-2 mb-5 font-poppins font-medium">Batch 3</motion.div>
                    <motion.div   whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-[0.8rem] mb-5">Intensive English for professionals classes, focusing on enhancing workplace communication, professional writing, presentations, job interviews, and practical speaking skill..</motion.div> 
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 0.6 }}  className="flex mt-2 mb-2">
                        <a href="https://dibimbing-lms-dev.s3.ap-southeast-1.amazonaws.com/1753888801550-Muhammad-Shofwan-Shiddiq.pdf"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                            Report Card
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}
