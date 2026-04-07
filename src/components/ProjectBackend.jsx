import { motion } from "framer-motion"
import mockup_1 from "../assets/mockup_1.png"
import mockup_7 from "../assets/mockup_7.png"
import mockup_8 from "../assets/mockup_8.png"
import mockup_9 from "../assets/mockup_9.png"
import mockup_10 from "../assets/mockup_10.png"
import mockup_11 from "../assets/mockup_11.png"
import mockup_12 from "../assets/mockup_12.png"
import weatherify from "../assets/weatherify.png"
import { aspnet_quiz ,aspnet_webapi, aspnet_mvc, gametify, go_microservices, projct_express, project_login, project_product, project_portfolio, cybersecurity_portfolio, recon, project_weatherify }  from "../constants/index.js"


export const ProjectBackend = () => {
  return (
    <div className="flex items-center justify-center">
        <div className="justify-left w-full md:w-4/4 font-poppins font-light text-[0.9rem] mb-40   mt-20">
            <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0 }}  className="mb-3 text-2xl">Projects</motion.h1>
        
            <a href="https://github.com/shofwanshiddiq?tab=repositories"  target="_blank" className="w-[fit-content] hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                            Full Projects Documentation on Github
            </a>

        {/* BACKEND */}

            <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0 }}  className="mt-12 mb-0 text-xl text-primary-skyblue font-medium">Backend Services</motion.h1>

             {/* ROW 1 */}
            <div className="flex flex-col md:flex-row mb-8 mt-4">

                {/* ASP.NET WEB API for User login and Employees Data Management */}
                <div className="mb-10 md:mb-0 w-full md:w-1/3 mr-4 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110">
                    <div className="overflow-hidden rounded-xl h-[250px] aspect-[16/9] w-full">
                        <img
                        className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                        src={mockup_10}
                        alt="mockup_10"
                        />
                    </div>
                    <div className="mt-2 text-left text-[1.2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">ASP.NET WEB API for User login and Employees Data Management</div>
                    <div className="flex flex-wrap gap-2 mt-2 mb-5 justify-start">
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue rounded-md py-1 px-2 bg-gradient-to-r from-purple-950 to-purple-800 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            ASP.NET Web API
                        </div>

                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue rounded-md py-1 px-2 bg-gradient-to-r from-red-900 to-red-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            C#
                        </div>

                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            RESTful API
                        </div>

                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue rounded-md py-1 px-2 bg-gradient-to-r from-yellow-700 to-yellow-400 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            MS SQL Server
                        </div>

                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue rounded-md py-1 px-2 bg-gradient-to-r from-green-700 to-green-400 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            Swagger
                        </div>

                    </div>
                    <div className="text-[0.8rem] mb-3 whitespace-pre-line text-left">{aspnet_webapi}</div>
                    <div  className="flex mt-2 justify-start">
                            <a href="https://github.com/shofwanshiddiq/NetWebApi"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                            Documentation
                            </a>
                        </div>
                </div>

                {/* ASP.NET MVC Application for Product Transaction Management */}
                <div className="w-full md:w-1/3 md:ml-3 mr-4 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110 ">
                    <div className="overflow-hidden rounded-xl h-[250px] aspect-[16/9] w-full">
                    <img
                        className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                        src={mockup_11}
                        alt="mockup_11"
                    />
                    </div>
                    <div className="mt-2 text-left text-[1.2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">ASP.NET MVC Application for Product Transaction Management</div>
                    <div className="flex flex-wrap gap-2 mt-2 mb-5 justify-start">
                
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue rounded-md py-1 px-2 bg-gradient-to-r from-purple-950 to-purple-800 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            ASP.NET MVC
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue rounded-md py-1 px-2 bg-gradient-to-r from-red-900 to-red-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            C#
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            RESTful API
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue rounded-md py-1 px-2 bg-gradient-to-r from-yellow-700 to-yellow-400 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            MS SQL Server
                            </div>
                    </div>
                    <div className="text-[0.8rem] mb-3 whitespace-pre-line text-left">{aspnet_mvc}</div>
                    <div  className="flex mt-2 justify-start">
                            <a href="https://github.com/shofwanshiddiq/mvc-product-transaction"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                            Documentation
                            </a>
                        </div>
                </div>

                {/* Quiz Trivia Web App Services */}
                <div className="w-full md:w-1/3 md:ml-3 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110 ">
                    <div className="overflow-hidden rounded-xl h-[250px] aspect-[16/9] w-full">
                    <img
                        className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                        src={mockup_12}
                        alt="mockup_12"
                    />
                    </div>
                    <div className="mt-2 text-left text-[1.2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">Quiz Trivia Web App Services</div>
                    <div className="flex flex-wrap gap-2 mt-2 mb-5 justify-start">
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue rounded-md py-1 px-2 bg-gradient-to-r from-blue-950 to-blue-800 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            ReactJS
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue rounded-md py-1 px-2 bg-gradient-to-r from-purple-950 to-purple-800 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            ASP.NET Core
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue rounded-md py-1 px-2 bg-gradient-to-r from-red-900 to-red-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            C#
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            RESTful API
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue rounded-md py-1 px-2 bg-gradient-to-r from-yellow-700 to-yellow-400 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            MS SQL Server
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue rounded-md py-1 px-2 bg-gradient-to-r from-green-700 to-green-400 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            Swagger
                            </div>
                    </div>
                    <div className="text-[0.8rem] mb-3 whitespace-pre-line text-left">{aspnet_quiz}</div>
                    <div  className="flex mt-2 justify-start">
                            <a href="https://github.com/shofwanshiddiq/QuizAPI"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                            Documentation
                            </a>
                            <a href="https://github.com/shofwanshiddiq/quiz-client"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                            Front-end Documentation
                            </a> 
                        </div>
                </div>

            </div>

             {/* ROW 2 */}
            <div className="flex flex-col md:flex-row mb-8 mt-4">

                {/* Gametify */}
                <div className="mb-10 md:mb-0 w-full md:w-1/3 mr-4 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110">
                    <div className="overflow-hidden rounded-xl h-[250px] aspect-[16/9] w-full">
                    <img
                        className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                        src={mockup_8}
                        alt="mockup_8"
                    />
                    </div>
                    <div className="mt-2 text-left text-[1.2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">Gametify</div>
                    <div className="flex mt-2 mb-5 justify-start">
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-blue-600 to-blue-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            Go
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            RESTful API
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-800 to-yellow-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            MySQL
                            </div>
                    </div>
                    <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left">{gametify}</div>
                    <div  className="flex mt-2 justify-start">
                            <a href="https://github.com/shofwanshiddiq/mobile-apps-docs"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                            Documentation
                            </a>
                        </div>
                </div>

                {/* Go Microservices Product */}
                <div className="w-full md:w-1/3 md:ml-3 mr-4 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110 ">
                    <div className="overflow-hidden rounded-xl h-[250px] aspect-[16/9] w-full">
                    <img
                        className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                        src={mockup_8}
                        alt="mockup_8"
                    />
                    </div>
                    <div className="mt-2 text-left text-[1.2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">Go Microservices Product</div>
                    <div className="flex mt-2 mb-5 justify-start">
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-blue-600 to-blue-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            Go
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            RESTful API
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-800 to-yellow-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            MySQL
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-blue-800 to-blue-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            Docker
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-orange-800 to-orange-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            RabbitMQ
                            </div>
                    </div>
                    <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left">{go_microservices}</div>
                    <div  className="flex mt-2 justify-start">
                            <a href="https://github.com/shofwanshiddiq/go-microservices-product"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                            Documentation
                            </a>
                        </div>
                </div> 

                {/* User Management Api */}
                 <div className="w-full md:w-1/3 md:ml-3 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110 ">
                          
                    <div className="overflow-hidden rounded-xl h-[250px] aspect-[16/9] w-full">
                        <img
                            className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                            src={mockup_7}
                            alt="mockup_7"
                        />
                        </div>
                        <div className="mt-2 text-left text-[1.25rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">User Management | Express</div>
                    <div className="flex mt-2 mb-5 justify-start">
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-green-900 to-green-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                NodeJS
                                </div>
                                <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-900 to-gray-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                ExpressJS
                                </div>
                                <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-black-800 to-black-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                KnexJS
                                </div>
                                <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-800 to-yellow-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                MySQL
                                </div>
                        </div>
                        <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left w-full">{projct_express}</div>
                        <div  className="flex mt-2 justify-start">
                                <a href="https://github.com/shofwanshiddiq/express-user-management"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                                Documentation
                                </a>
                        </div>
                </div>

            </div>

             {/* ROW 3 */}
            <div className="flex flex-col md:flex-row mb-8 mt-4">

                {/* Go Product Management */}
                <div className="mb-10 md:mb-0 w-full md:w-1/3 mr-4 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110">
                    <div className="overflow-hidden rounded-xl h-[250px] aspect-[16/9] w-full">
                        <img
                            className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                            src={mockup_8}
                            alt="mockup_8"
                        />
                        </div>
                        <div className="mt-2 text-left text-[1.25rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">Product Management | Go</div>
                    <div className="flex mt-2 mb-5 justify-start">
                                <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-blue-900 to-blue-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                Go
                                </div>
                                <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-900 to-gray-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                RESTful API
                                </div>
                                <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-800 to-yellow-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                MySQL
                                </div>
                        </div>
                        <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left w-full">{project_product}</div>
                        <div  className="flex mt-2 justify-start">
                                <a href="https://github.com/shofwanshiddiq/product-management-api"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                                Documentation
                                </a>
                        </div>
                </div>
                
                {/* Go Login Management */}
                <div className="w-full md:w-1/3 md:ml-3 mr-4 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110 ">
                    <div className="overflow-hidden rounded-xl h-[250px] aspect-[16/9] w-full">
                        <img
                            className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                            src={mockup_9}
                            alt="mockup_9"
                        />
                        </div>
                        <div className="mt-2 text-left text-[1.25rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">Login Management | Go</div>
                    <div className="flex mt-2 mb-5 justify-start">
                                <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-blue-900 to-blue-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                Go
                                </div>
                                <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-900 to-gray-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                RESTful API
                                </div>
                                <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-800 to-yellow-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                MySQL
                                </div>
                        </div>
                        <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left w-full">{project_login}</div>
                        <div  className="flex mt-2 justify-start">
                        <a href="https://github.com/shofwanshiddiq/golang-api-login"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                                Documentation
                                </a>
                        </div>
                </div>
            </div>

        {/* FRONTEND */}

            <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0 }}  className="mt-12 mb-0 text-xl text-primary-skyblue font-medium">Frontend</motion.h1>

             {/* ROW 1 */}
            <div className="flex flex-col md:flex-row mb-8 mt-4">

                {/* Website Porftolio */}
                <div className="mb-10 md:mb-0 w-full md:w-1/3 mr-4 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110">
                        <div className="overflow-hidden rounded-xl h-[250px] aspect-[16/9] w-full">
                            <img
                            className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                            src={mockup_1}
                            alt="mockup_1"
                            />
                        </div>
                        <div className="mt-2 text-left text-[1.5rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">Website Portfolio</div>
                        <div className="flex mt-2 mb-5 justify-start">
                                <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-purple-800 to-purple-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                Vite
                                </div>
                                <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-blue-950 to-blue-800 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                React
                                </div>
                                <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-blue-700 to-blue-400 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                Tailwind CSS
                                </div>
                        </div>
                        <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left">{project_portfolio}</div>
                        <div  className="flex mt-2 justify-start">
                                <a href="https://portfolio-shofwan.vercel.app/"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 ml-0 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                                Website
                                </a>
                                <a href="https://github.com/shofwanshiddiq/portfolio-shofwan/"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 ml-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                                Documentation
                                </a>
                            </div>
                </div>

                {/* Weatherify */}
                <div className="w-full md:w-1/3 md:ml-3 mr-4 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110 ">
                    <div className="overflow-hidden rounded-xl h-[250px] aspect-[16/9] w-full">
                    <img
                        className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                        src={weatherify}
                        alt="weatherify"
                    />
                    </div>
                    <div className="mt-2 text-left text-[1.2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">Weatherify</div>
                    <div className="flex mt-2 mb-5 justify-start">
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-purple-800 to-purple-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        Vite
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-blue-950 to-blue-800 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        React
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-blue-700 to-blue-400 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        Typescript
                        </div>
                    </div>
                    <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left">{project_weatherify}</div>
                    <div  className="flex mt-2 justify-start">
                            <a href="https://weatherify-six.vercel.app/"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 ml-0 mr-3  bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                                Website
                            </a>
                            <a href="https://github.com/shofwanshiddiq/weatherify"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                            Documentation
                            </a>
                        </div>
                </div>

            </div>

        {/* CYBERSECURITY PORFOLIO */}

            <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0 }}  className="mt-12 mb-0 text-xl text-primary-skyblue font-medium">Cybersecurity</motion.h1>

            {/* ROW 1 */}
            <div className="flex flex-col md:flex-row mb-8 mt-4 ">

                {/* Cybersecuruity Portfolio */}
                <div className="mb-10 md:mb-0 w-full md:w-1/3 mr-4 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110">
                    <div className="mt-2 text-left text-[1.2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">Cybersecurity Portfolio</div>
                    <div className="flex mt-2 mb-5 justify-start">
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-blue-600 to-blue-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            Kali Linux
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            Burp Suite
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-800 to-yellow-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            Bettercap
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-800 to-yellow-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            SQL Map
                            </div>
                    </div>
                    <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left">{cybersecurity_portfolio}</div>
                    <div  className="flex mt-2 justify-start">
                            <a href="https://github.com/shofwanshiddiq/cybersecurity-portfolio-shofwan"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                            Documentation
                            </a>
                        </div>
                </div>

                {/* Dibishop Penetration Testing Report */}
                {/* <div className="w-full md:w-1/3 md:ml-3 mr-4 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110 ">
                    <div className="mt-2 text-left text-[1.2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">Go Microservices Product</div>
                    <div className="flex mt-2 mb-5 justify-start">
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-blue-600 to-blue-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            Go
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            RESTful API
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-800 to-yellow-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            MySQL
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-blue-800 to-blue-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            Docker
                            </div>
                            <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-orange-800 to-orange-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                            RabbitMQ
                            </div>
                    </div>
                    <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left">{go_microservices}</div>
                    <div  className="flex mt-2 justify-start">
                            <a href="https://github.com/shofwanshiddiq/go-microservices-product"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                            Documentation
                            </a>
                        </div>
                </div>  */}

                {/* Reconnaisance Automation */}
                 <div className="w-full md:w-1/3 md:ml-3 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110 ">
                  
                        <div className="mt-2 text-left text-[1.25rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">Reconnaisance Automation</div>
                    <div className="flex mt-2 mb-5 justify-start">
                    <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-green-900 to-green-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                Bash
                                </div>
                                <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-900 to-gray-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                Subfinder
                                </div>
                                <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-black-800 to-black-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                Htttpx
                                </div>
                                <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-800 to-yellow-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                                Anew
                                </div>
                        </div>
                        <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left w-full">{recon}</div>
                        <div  className="flex mt-2 justify-start">
                                <a href="https://github.com/shofwanshiddiq/recon-automation-shofwan"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                                Documentation
                                </a>
                        </div>
                </div>

            </div>

        </div>
    </div>
  )
}
