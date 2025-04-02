import { motion } from "framer-motion"
import mockup_1 from "../assets/mockup_1.png"
import mockup_2 from "../assets/mockup_2.png"
import mockup_3 from "../assets/mockup_3.png"
import mockup_4 from "../assets/mockup_4.png"
import mockup_5 from "../assets/mockup_5.png"
import mockup_6 from "../assets/mockup_6.png"
import mockup_7 from "../assets/mockup_7.png"
import mockup_8 from "../assets/mockup_8.png"
import mockup_9 from "../assets/mockup_9.png"
import mockup_10 from "../assets/mockup_10.png"
import mockup_11 from "../assets/mockup_11.png"
import mockup_12 from "../assets/mockup_12.png"
import { go_microservices, aspnet_quiz ,aspnet_webapi, aspnet_mvc ,project_portfolio, project_mobile, project_ecommerce, project_enchantre, project_enchantre_website, project_ticketing, projct_express, project_product, project_login}  from "../constants/index.js"


export const ProjectMockup = () => {
  return (
    <div className="flex items-center justify-center">
        <div className="justify-left w-full md:w-4/4 font-poppins font-light text-[0.9rem] mb-40   mt-20">
        <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0 }}  className="mb-3 text-2xl">Projects</motion.h1>
      
      
        <a href="https://github.com/shofwanshiddiq?tab=repositories"  target="_blank" className="w-[fit-content] hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        Full Projects Documentation on Github
                        </a>
          
          
          <div className="flex flex-col md:flex-row mb-12 mt-8">


            <div className="mb-10 md:mb-0 w-full md:w-1/3 mr-8 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110">
                <div className="overflow-hidden rounded-xl">
                  <img
                    className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                    src={mockup_10}
                    alt="mockup_10"
                  />
                </div>
                <div className="mt-2 text-right text-[1.2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">ASP.NET WEB API for User login and Employees Data Management</div>
                <div className="flex mt-2 mb-5 justify-start">
                  
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-purple-950 to-purple-800 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        ASP.NET Web API
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-red-900 to-red-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                       C#
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        RESTful API
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-700 to-yellow-400 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        MS SQL Server
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-green-700 to-green-400 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                       Swagger
                        </div>
                </div>
                <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left">{aspnet_webapi}</div>
                <div  className="flex mt-2 justify-start">
                        <a href="https://github.com/shofwanshiddiq/NetWebApi"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 ml-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        Documentation
                        </a>
                  </div>
            </div>


            <div className="w-full md:w-1/3 md:ml-3 mr-8 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110 ">
              <div className="overflow-hidden rounded-xl">
                <img
                  className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                  src={mockup_11}
                  alt="mockup_11"
                />
              </div>
              <div className="mt-2 text-left text-[1.2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">ASP.NET MVC Application for Product Transaction Management</div>
              <div className="flex mt-2 mb-5 justify-start">
            
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-purple-950 to-purple-800 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        ASP.NET MVC
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-red-900 to-red-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                       C#
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        RESTful API
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-700 to-yellow-400 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        MS SQL Server
                        </div>
                </div>
                <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left">{aspnet_mvc}</div>
                <div  className="flex mt-2 justify-start">
                        <a href="https://github.com/shofwanshiddiq/mvc-product-transaction"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        Documentation
                        </a>
                  </div>
            </div>

            <div className="w-full md:w-1/3 md:ml-3 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110 ">
              <div className="overflow-hidden rounded-xl">
                <img
                  className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                  src={mockup_12}
                  alt="mockup_12"
                />
              </div>
              <div className="mt-2 text-left text-[1.2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">Quiz Trivia Web App</div>
              <div className="flex mt-2 mb-5 justify-start">
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-blue-950 to-blue-800 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        ReactJS
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-purple-950 to-purple-800 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        ASP.NET Core
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-red-900 to-red-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                       C#
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        RESTful API
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-700 to-yellow-400 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        MS SQL Server
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-green-700 to-green-400 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        Swagger
                        </div>
                </div>
                <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left">{aspnet_quiz}</div>
                <div  className="flex mt-2 justify-start">
                        <a href="https://github.com/shofwanshiddiq/quiz-client"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        Front-end Documentation
                        </a>
                        <a href="https://github.com/shofwanshiddiq/QuizAPI"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        Back-end Documentation
                        </a>
                  </div>
            </div>

          </div>
         
          <div className="flex flex-col md:flex-row mb-12 mt-8">
           
            <div className="w-full md:w-1/3 md:mr-8 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110 ">
              <div className="overflow-hidden rounded-xl">
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
           
            <div className="mb-10 md:mb-0 w-full md:w-1/3 mr-8 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110">
                <div className="overflow-hidden rounded-xl">
                  <img
                    className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                    src={mockup_1}
                    alt="mockup_1"
                  />
                </div>
                <div className="mt-2 text-right text-[1.5rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">Website Portfolio</div>
                <div className="flex mt-2 mb-5 justify-end">
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
                <div className="text-[0.8rem] mb-5 whitespace-pre-line text-right">{project_portfolio}</div>
                <div  className="flex mt-2 justify-end">
                        <a href="https://portfolio-shofwan.vercel.app/"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 ml-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        Website
                        </a>
                        <a href="https://github.com/shofwanshiddiq/portfolio-shofwan/"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 ml-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        Documentation
                        </a>
                  </div>
            </div>


            <div className="w-full md:w-1/3 md:ml-3 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110 ">
              <div className="overflow-hidden rounded-xl">
                <img
                  className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                  src={mockup_2}
                  alt="mockup_2"
                />
              </div>
              <div className="mt-2 text-left text-[1.2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">HR Mobile Apps</div>
              <div className="flex mt-2 mb-5 justify-start">
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-purple-900 to-purple-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                       .NET Maui
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-red-900 to-red-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                       C#
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        RESTful API
                        </div>
                </div>
                <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left">{project_mobile}</div>
                <div  className="flex mt-2 justify-start">
                        <a href="https://github.com/shofwanshiddiq/mobile-apps-docs"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        Documentation
                        </a>
                  </div>
            </div>

          

          </div>
          

          <div  className="flex flex-col md:flex-row mb-12">

{/* Express User Management */}
          <div className="w-full md:w-1/3 md:mr-4 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110">
          
          
          <div className="overflow-hidden rounded-xl">
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


{/* Go Product Management */}
        <div className="w-full md:w-1/3 md:mr-4 md:ml-4 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110">
          
          
          <div className="overflow-hidden rounded-xl">
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
        <div className="w-full md:w-1/3 md:ml-4 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110">
          
          
          <div className="overflow-hidden rounded-xl">
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

          <div  className="flex flex-col md:flex-row mb-12">
            <div className="w-full md:w-1/3 md:mr-8 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-105">
            
            
            <div className="overflow-hidden rounded-xl">
                  <img
                    className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                    src={mockup_5}
                    alt="mockup_5"
                  />
                </div>
                <div className="mt-2 text-left text-[1.7rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">Ticketing Web App</div>
              <div className="flex mt-2 mb-5 justify-start">
              <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-900 to-gray-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        HTML & CSS5
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-purple-900 to-purple-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        PHP
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-red-800 to-red-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        cPanel
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-800 to-yellow-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        MySQL
                        </div>
                </div>
                <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left w-full md:w-2/3">{project_ticketing}</div>
                <div  className="flex mt-2 justify-start">
                        <a href="https://www.minovais.com"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                      See Website
                        </a>
                        <a href="https://github.com/shofwanshiddiq/ticketing"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        Documentation
                        </a>
                  </div>
          </div>
            <div className="w-full md:w-2/3 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-105">
            
            
            <div className="overflow-hidden rounded-xl">
                    <img
                      className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                      src={mockup_3}
                      alt="mockup_3"
                    />
                  </div>
                  <div className="mt-2 text-left text-[2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">E-Commerce Web App</div>
                <div className="flex mt-2 mb-5 justify-start">
                         <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-purple-900 to-purple-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        ASP.NET Web Forms
                          </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                          HTML & CSS5
                          </div>
                          <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-red-900 to-red-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        C#
                          </div>
                          <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-900 to-yellow-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        Javascript
                          </div>
                          <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                          RESTful API
                          </div>
                  </div>
                  <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left w-full">{project_ecommerce}</div>
                  <div  className="flex mt-2 justify-start">
                          <a href="https://www.minovais.com"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        See Website
                          </a>
                          <a href="https://github.com/shofwanshiddiq/ecommerce-apps-docs"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                          Documentation
                          </a>
                    </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-12">


              <div className="w-full md:w-2/5 mb-10 md:mb-0 mr-3 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4  transform transition-transform duration-300 ease-in-out  hover:scale-110">
              <div className="overflow-hidden rounded-xl">
                  <img
                    className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                    src={mockup_6}
                    alt="mockup_6"
                  />
                </div>
                <div className="mt-2 text-right text-[1.2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">Enchantre Website</div>
                <div className="flex mt-2 mb-5 justify-end">
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-900 to-gray-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        HTML & CSS5
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-purple-900 to-purple-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        PHP
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-red-800 to-red-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        cPanel
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-800 to-yellow-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        MySQL
                        </div>
                </div>
                <div className="text-[0.8rem] mb-5 whitespace-pre-line text-right">{project_enchantre_website}</div>
                <div  className="flex mt-2 justify-end">
                        <a href="https://enchantre.com"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 ml-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        Website
                        </a>
                        <a href="https://github.com/shofwanshiddiq/enchantre-docs"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 ml-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        Documentation
                        </a>
                  </div>
              </div>


              <div className="w-full md:w-3/5 md:ml-6 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4  transform transition-transform duration-300 ease-in-out  hover:scale-110">
              <div className="overflow-hidden rounded-xl">
                  <img
                    className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                    src={mockup_4}
                    alt="mockup_4"
                  />
                </div>
                <div className="mt-2 text-left text-[1.2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">Enchantre Digital Invitations</div>
              <div className="flex mt-2 mb-5 justify-start">
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-900 to-gray-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        HTML & CSS5
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-purple-900 to-purple-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        PHP
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-red-800 to-red-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        cPanel
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-yellow-800 to-yellow-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        MySQL
                        </div>
                </div>
                <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left">{project_enchantre}</div>
                  <div  className="flex mt-2 justify-start">
                        <a href="https://enchantre.com/product.html"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        See Products
                        </a>
                        <a href="https://github.com/shofwanshiddiq/enchantre-docs"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        Documentation
                        </a>
                  </div>
              </div>
          </div>

        </div>
    </div>
  )
}
