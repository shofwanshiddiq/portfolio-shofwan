import about from "../assets/about.png"
import { motion } from "framer-motion"
export const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mb-20">
        <div className="justify-left w-full lg:w-2/5 font-poppins font-light text-[0.9rem]  mt-20">
            <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0 }}  className="mb-8 text-2xl">About Me . . .</motion.h1>
            <motion.h2 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 2, delay: 0.3 }}   className="mb-5"><a className="text-primary-skyblue font-poppins font-medium">Software Engineer </a>with over 2 years of experience. Interested in exploring cutting-edge technologies and combining my skills in development and design to create innovative & user-friendly solutions</motion.h2>
            <motion.h2 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 2, delay: 0.5 }}   className="mb-5">Currently, work as Software Engineer at <a href="https://www.minovais.com"  target="_blank" className="text-primary-skyblue font-poppins font-medium">PT Minova Infotech Solutions</a>, developing full-stack solutions for Human Resources, Enterprise Resources Planning, Customer Relationship Management, and e-Commerce applications for more than 50 clients and over 10.000 employees.  Use Microsoft .NET framework, SQL Server Database, and ExtJS Front-end alongside with .NET MAUI and Xamarin for both IOS and android for cross-platform mobile development.</motion.h2>
            <motion.h2 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 2, delay: 0.7 }}   className="mb-5">I’m also learning Golang with <a href="https://dibimbing.id/layanan/bootcamp/golang-development"  target="_blank"  className="text-primary-skyblue font-poppins font-medium">Dibimbing</a>, focusing on backend development with MySQL and MongoDB database, and utilizing Docker for deployment and containerization.</motion.h2>
        </div>
         <motion.img  whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 2, delay: 1 }}  className="h-[40vh] ml-20" src={about} alt="logo" />
    </div>
  )
}
