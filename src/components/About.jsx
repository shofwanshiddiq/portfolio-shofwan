import about from "../assets/about.png"
import { motion } from "framer-motion"
export const About = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="justify-left w-2/5 font-poppins font-light text-[0.9rem]">
            <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0 }}  className="mb-8 text-2xl">About Me . . .</motion.h1>
            <motion.h2 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 2, delay: 0.3 }}   className="mb-5"><a className="text-primary-skyblue font-poppins font-medium">Software Engineer </a>with over 2 years of experience. Passionate about exploring cutting-edge technologies and combining my skills in development and design to create seamless and innovative solutions</motion.h2>
            <motion.h2 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 2, delay: 0.5 }}   className="mb-5">Currently, I’m a Software Engineer at <a className="text-primary-skyblue font-poppins font-medium">PT Minova Infotech Solutions</a>, developoing full-stack solutions for Human Resources, Enterprise Resources Planning, Customer Relationship Management, and e-Commerce applications for more than 50 clients and over 10.000 employees.  Use Microsoft .NET framework, SQL Server Database, and ExtJS Front-end alongside with .NET MAUI and Xamarin for both IOS and android for cross-platform mobile development.</motion.h2>
            <motion.h2 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 2, delay: 0.7 }}   className="mb-5">I’m also learning Golang with <a className="text-primary-skyblue font-poppins font-medium">Dibimbing</a>, focusing on backend development with MySQL database, and utilizing Docker for containerization.</motion.h2>
        </div>
         <motion.img  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 1 }}  className="h-[40vh] ml-20" src={about} alt="logo" />
    </div>
  )
}
