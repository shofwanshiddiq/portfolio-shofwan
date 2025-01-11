import profile from "../assets/profiles.png"
import { motion } from "framer-motion"

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
   <motion.img 
  animate={{ opacity: 1, x: 0 }} 
  initial={{ opacity: 0, x: -100 }} 
  transition={{ duration: 2, delay: 0 }} // No delay for the first motion
  className="h-[30vh]" 
  src={profile} 
  alt="logo" 
/>

<motion.h1  
  animate={{ opacity: 1, x: 0 }} 
  initial={{ opacity: 0, x: -100 }} 
  transition={{ duration: 2, delay: 0.4 }} // Delay of 0.5 seconds for the second motion
  className="bg-white bg-clip-text text-5xl text-transparent font-poppins font-medium mt-[-2rem] mb-4">
  <a className="text-primary-skyblue">S</a>hofwan <a className="text-primary-skyblue">S</a>hiddiq
</motion.h1>

<motion.h1  
  animate={{ opacity: 1, x: 0 }} 
  initial={{ opacity: 0, x: -100 }} 
  transition={{ duration: 2, delay: 0.9 }} // Delay of 1 second for the third motion
  className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-2xl text-transparent font-poppins font-light">
  Software Engineer
</motion.h1>
    </div>
  )
}
