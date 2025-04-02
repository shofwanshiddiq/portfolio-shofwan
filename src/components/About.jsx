import about from "../assets/about.png"
import { motion } from "framer-motion"
export const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mb-20">
        <div className="justify-left w-full lg:w-2/5 font-poppins font-light text-[0.9rem]  mt-20">
            <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0 }}  className="mb-8 text-2xl">About Me . . .</motion.h1>
            <motion.h2 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 2, delay: 0.3 }}   className="mb-5"><a className="text-primary-skyblue font-poppins font-medium">Software Engineer </a> with over two years of experience in developing full-stack solutions for Human Resources, Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), E-Commerce platforms, and cross-platform mobile applications. Specialized in the <a className="text-primary-skyblue font-poppins font-medium">.NET</a> ecosystem, including <a className="text-primary-skyblue font-poppins font-medium">.NET Framework, .NET Core, ASP.NET MVC, ASP.NET Web API, .NET MAUI</a>, alongside integrating Microsoft <a className="text-primary-skyblue font-poppins font-medium">SQL Server</a>, managing databases, and implementing stored procedures and functions to deliver scalable, end-to-end solutions.</motion.h2>
            <motion.h2 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 2, delay: 0.5 }}   className="mb-5">Also experienced in building microservices, implementing message brokers using <a className="text-primary-skyblue font-poppins font-medium">RabbitMQ</a>, performing <a className="text-primary-skyblue font-poppins font-medium">gRPC</a> requests & creating proto file, using <a className="text-primary-skyblue font-poppins font-medium">Nginx</a> for load balancing, and writing unit tests. Experience working with <a className="text-primary-skyblue font-poppins font-medium">Golang, NodeJS, Phyton, PHP</a>  for backend development, <a className="text-primary-skyblue font-poppins font-medium">React, Angular</a> for front-end development, <a className="text-primary-skyblue font-poppins font-medium">REST & GraphQL</a> for API Integration with <a className="text-primary-skyblue font-poppins font-medium">MySQL, MongoDB, Redis</a>  as database and <a className="text-primary-skyblue font-poppins font-medium">Docker</a> for containerization.</motion.h2>
        </div>
         <motion.img  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 1 }}  className="h-[40vh] ml-20" src={about} alt="logo" />
    </div>
  )
}
