import { motion } from "framer-motion"
export const Service = () => {
  return (
     <div className="flex items-center justify-center h-screen">
            <div className="text-center md:text-left justify-left  md:w-2/6 font-poppins font-light text-[0.9rem]">
            <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 1, delay: 0 }}  className="mb-8 text-2xl">Services</motion.h1>
            
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 2, delay: 0.3 }}  className="mb-3"><a  className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent text-[1.2rem] font-poppins font-medium">Web Development </a> for</motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 2, delay: 0.6 }}  className="text-4xl mb-3">Company Profile</motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 2, delay: 0.9 }}  className="text-3xl mb-2">Personal Profile</motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 2, delay: 1.2 }}  className="text-2xl mb-5">Online Store</motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 2, delay: 1.5 }}  className="text-1xl mb-1">etc.</motion.div>
        </div>
        </div>
  )
}
