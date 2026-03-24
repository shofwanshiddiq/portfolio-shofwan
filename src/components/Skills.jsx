import { motion } from "framer-motion";
import dibimbing from "../assets/dibimbig.png"

const skills = [
  { name: "HTML & CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "ReactJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "NodeJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "ExtJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
];

const skills2 = [
  { name: ".NET", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" },
  { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Golang", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "Kali Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git & GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
];

export const Skills = () => {
  return (
    <div className="flex items-start justify-center h-screen pt-10 mb-20">
      <div className="w-full font-poppins font-light text-[0.9rem] text-left">
        <motion.h1 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -50 }} 
          transition={{ duration: 1 }}  
          className="mb-8 text-2xl"
        >
          Skills & Certificates
        </motion.h1>


{/* row 1 */}
        <div  className="flex flex-col md:flex-row mb-6">
        
             {/* Golang Back-End Development */}
             <div className="w-full md:w-1/5 md:mr-6 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
            

             <div className="mt-2 text-left text-[1.3rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">
                    Golang Back-End Development
                </div>
            
                <div className="overflow-hidden rounded-xl text-left">
                    <img
                        className=" h-[60px] py-3 rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                        src={dibimbing}
                        alt="golangbackend"
                    />
                </div>

                
                <div className="font-poppins font-medium text-primary-skyblue text-[0.8rem]">May 2025</div>

                <div className="flex mt-2 justify-start">
                    <a
                    href="https://dibimbing.id/certificate-validation?cn=201029GO02051814"
                    target="_blank"
                    className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]"
                    >
                    See Full Certificate
                    </a>
                </div>
            </div>

             {/* Cybersecurity */}
             {/* <div className="w-full md:w-1/5 md:mr-6 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
            

             <div className="mt-2 text-left text-[1.3rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">
                    Cybersecurity
                </div>
            
                <div className="overflow-hidden rounded-xl text-left">
                    <img
                        className=" h-[60px] py-3 rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                        src={dibimbing}
                        alt="cybersecurity"
                    />
                </div>

                
                <div className="font-poppins font-medium text-primary-skyblue text-[0.8rem]">Jun 2026</div>

                <div className="flex mt-2 justify-start">
                    <a
                    href="https://dibimbing.id/certificate-validation?cn=201029GO02051814"
                    target="_blank"
                    className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]"
                    >
                    See Full Certificate
                    </a>
                </div>
            </div> */}

              {/* EF SET */}
              <div className="w-full md:w-1/5 md:mr-6 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
            

            <div className="mt-2 text-left text-[1.3rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">
                   EF SET (C1 Advanced)
               </div>
           
               {/* <div className="overflow-hidden rounded-xl text-left">
                   <img
                       className=" h-[38px] py-3 rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                       src="https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg"
                       alt="cssbasic"
                   />
               </div> */}

               
               <div className="font-poppins font-medium text-primary-skyblue text-[0.8rem]">May 2025</div>

               <div className="flex mt-2 justify-start">
                   <a
                   href="https://cert.efset.org/en/eA3VT6"
                   target="_blank"
                   className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]"
                   >
                   See Full Certificate
                   </a>
               </div>
           </div>

              {/* IELTS Preparation */}
              <div className="w-full md:w-1/5 md:mr-6 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
            

            <div className="mt-2 text-left text-[1.3rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">
                   IELTS Preparation
               </div>
           
               {/* <div className="overflow-hidden rounded-xl text-left">
                   <img
                       className=" h-[38px] py-3 rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                       src="https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg"
                       alt="cssbasic"
                   />
               </div> */}

               
               <div className="font-poppins font-medium text-primary-skyblue text-[0.8rem]">Dec 2024</div>

               <div className="flex mt-2 justify-start">
                   <a
                   href="https://www.linkedin.com/in/shofwanshiddiq/overlay/Certifications/1765556513/treasury/?profileId=ACoAAC7H4aUBnWbwWlT4KZOeIIaoRBCbnAqy4Dw"
                   target="_blank"
                   className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]"
                   >
                   See Full Certificate
                   </a>
               </div>
           </div>

        </div>

 {/* row 2 */}
         <div  className="flex flex-col md:flex-row mb-6">
        
             {/* Frontend Developer Reactw */}
             <div className="w-full md:w-1/5 md:mr-6 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
            

             <div className="mt-2 text-left text-[1.3rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">
                    Frontend Developer (React)
                </div>
            
                <div className="overflow-hidden rounded-xl text-left">
                    <img
                        className=" h-[38px] py-3 rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                        src="https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg"
                        alt="frontendreact"
                    />
                </div>

                
                <div className="font-poppins font-medium text-primary-skyblue text-[0.8rem]">February 2025</div>

                <div className="flex mt-2 justify-start">
                    <a
                    href="https://www.hackerrank.com/certificates/8ab4262e386d"
                    target="_blank"
                    className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]"
                    >
                    See Full Certificate
                    </a>
                </div>
            </div>

             {/* CSS Basic */}
             <div className="w-full md:w-1/5 md:mr-6 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
            

             <div className="mt-2 text-left text-[1.3rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">
                    CSS (Basic)
                </div>
            
                <div className="overflow-hidden rounded-xl text-left">
                    <img
                        className=" h-[38px] py-3 rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                        src="https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg"
                        alt="cssbasic"
                    />
                </div>

                
                <div className="font-poppins font-medium text-primary-skyblue text-[0.8rem]">February 2025</div>

                <div className="flex mt-2 justify-start">
                    <a
                    href="https://www.hackerrank.com/certificates/1acfe14d372e"
                    target="_blank"
                    className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]"
                    >
                    See Full Certificate
                    </a>
                </div>
            </div>

              {/* Javascript Basic */}
              <div className="w-full md:w-1/5 md:mr-6 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
            

            <div className="mt-2 text-left text-[1.3rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">
                   Javascript (Basic)
               </div>
           
               <div className="overflow-hidden rounded-xl text-left">
                   <img
                       className=" h-[38px] py-3 rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                       src="https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg"
                       alt="cssbasic"
                   />
               </div>

               
               <div className="font-poppins font-medium text-primary-skyblue text-[0.8rem]">February 2025</div>

               <div className="flex mt-2 justify-start">
                   <a
                   href="https://www.hackerrank.com/certificates/ffb62f8a6517"
                   target="_blank"
                   className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]"
                   >
                   See Full Certificate
                   </a>
               </div>
           </div>

              {/* Go Basic */}
              <div className="w-full md:w-1/5 md:mr-6 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
            

            <div className="mt-2 text-left text-[1.3rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">
                   Go (Basic)
               </div>
           
               <div className="overflow-hidden rounded-xl text-left">
                   <img
                       className=" h-[38px] py-3 rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                       src="https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg"
                       alt="cssbasic"
                   />
               </div>

               
               <div className="font-poppins font-medium text-primary-skyblue text-[0.8rem]">February 2025</div>

               <div className="flex mt-2 justify-start">
                   <a
                   href="https://www.hackerrank.com/certificates/29d9659ae877"
                   target="_blank"
                   className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]"
                   >
                   See Full Certificate
                   </a>
               </div>
           </div>

           
              {/* SQL Basic */}
              <div className="w-full md:w-1/5 md:mr-6 rounded-2xl bg-gray-800 bg-opacity-30 py-4 px-4 transform transition-transform duration-300 ease-in-out hover:scale-110">
            

            <div className="mt-2 text-left text-[1.3rem] font-poppins font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">
                   SQL (Basic)
               </div>
           
               <div className="overflow-hidden rounded-xl text-left">
                   <img
                       className=" h-[38px] py-3 rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                       src="https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg"
                       alt="cssbasic"
                   />
               </div>

               
               <div className="font-poppins font-medium text-primary-skyblue text-[0.8rem]">February 2025</div>

               <div className="flex mt-2 justify-start">
                   <a
                   href="https://www.hackerrank.com/certificates/d1391b52a8a0"
                   target="_blank"
                   className="hover:cursor-pointer hover:bg-primary-skyblue hover:text-black px-2 py-1 mr-3 bg-primary-skyblue rounded-md bg-opacity-10 font-poppins font-medium text-[0.8rem]"
                   >
                   See Full Certificate
                   </a>
               </div>
           </div>


        </div>


 {/* row 3 */}
        
        <div className="relative w-full">
          <motion.div 
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            style={{ whiteSpace: "nowrap" }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center justify-center p-4 bg-gray-800 bg-opacity-30  shadow-md rounded-xl hover:scale-125 transition-transform cursor-pointer"
              >
                <img src={skill.logo} alt={skill.name} className="w-16 h-16" />
                <p className="mt-2 text-sm font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

 {/* row 4 */}
        
        <div className="relative w-full mt-6">
          <motion.div 
            className="flex gap-6 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            style={{ whiteSpace: "nowrap" }}
          >
            {[...skills2, ...skills2].map((skill, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center justify-center p-4 bg-gray-800 bg-opacity-30  shadow-md rounded-xl hover:scale-125 transition-transform cursor-pointer"
              >
                <img src={skill.logo} alt={skill.name} className="w-16 h-16" />
                <p className="mt-2 text-sm font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>


      </div>
    </div>
  );
};
