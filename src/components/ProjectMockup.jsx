import { motion } from "framer-motion"
import mockup_1 from "../assets/mockup_1.png"
import mockup_2 from "../assets/mockup_2.png"
import mockup_3 from "../assets/mockup_3.png"
import mockup_4 from "../assets/mockup_4.png"
import { project_portfolio, project_mobile, project_ecommerce, project_enchantre, project_enchantre_website, project_ticketing}  from "../constants/index.js"

export const ProjectMockup = () => {
  return (
    <div className="flex items-center justify-center">
        <div className="justify-left w-full md:w-3/4 font-poppins font-light text-[0.9rem] mb-40   mt-20">
        <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0 }}  className="mb-8 text-2xl">Projects</motion.h1>
          <div className="flex flex-col md:flex-row mb-12">
            <div className="w-2/3 mr-8 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110">
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
                        Repositories
                        </a>
                  </div>
            </div>


            <div className="w-1/3 ml-3 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out  hover:scale-110 ">
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
                        <a href="www.minovais.com"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                       Website
                        </a>
                        <a href="https://github.com/shofwanshiddiq/mobile-apps"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        Repositories
                        </a>
                  </div>
            </div>

          </div>

          <div className="rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 mb-12 transform transition-transform duration-300 ease-in-out  hover:scale-105">
          
          
          <div className="overflow-hidden rounded-xl">
                  <img
                    className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                    src={mockup_3}
                    alt="mockup_3"
                  />
                </div>
                <div className="mt-2 text-left text-[2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">E-Commerce Web Apps</div>
              <div className="flex mt-2 mb-5 justify-start">
              <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        HTML & CSS5
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-purple-900 to-purple-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                       .NET Frameworks
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-red-900 to-red-500 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                       C#
                        </div>
                        <div className="hover:cursor-pointer hover:text-primary-skyblue hover:bg-primary-skyblue mr-2 rounded-md py-1 px-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-opacity-50 font-poppins font-medium text-[0.8rem]">
                        RESTful API
                        </div>
                </div>
                <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left w-1/3">{project_ecommerce}</div>
                <div  className="flex mt-2 justify-start">
                        <a href="www.minovais.com"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                       See Website
                        </a>
                        <a href="https://github.com/shofwanshiddiq/mobile-apps"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        See Full Repositories
                        </a>
                  </div>
          </div>


          <div className="flex flex-col md:flex-row mb-12">


              <div className="w-2/5 mr-3 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4  transform transition-transform duration-300 ease-in-out  hover:scale-110">
              <div className="overflow-hidden rounded-xl">
                  <img
                    className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                    src={mockup_4}
                    alt="mockup_4"
                  />
                </div>
                <div className="mt-2 text-right text-[1.2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">HR Mobile Apps</div>
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
              </div>


              <div className="w-3/5 ml-6 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4  transform transition-transform duration-300 ease-in-out  hover:scale-110">
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
                        <a href="www.minovais.com"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                       Website
                        </a>
                        <a href="https://github.com/shofwanshiddiq/mobile-apps"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        Repositories
                        </a>
                  </div>
              </div>
          </div>


        <div className="w-2/3 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 mb-12 transform transition-transform duration-300 ease-in-out  hover:scale-105">
          
          
            <div className="overflow-hidden rounded-xl">
                  <img
                    className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                    src={mockup_3}
                    alt="mockup_3"
                  />
                </div>
                <div className="mt-2 text-left text-[2rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">Ticketing Web App</div>
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
                <div className="text-[0.8rem] mb-5 whitespace-pre-line text-left w-2/3">{project_ticketing}</div>
                <div  className="flex mt-2 justify-start">
                        <a href="www.minovais.com"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                       See Website
                        </a>
                        <a href="https://github.com/shofwanshiddiq/mobile-apps"  target="_blank" className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]">
                        See Full Repositories
                        </a>
                  </div>
          </div>

        </div>
    </div>
  )
}
