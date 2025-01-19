import { motion } from "framer-motion";
import profile from "../assets/profiles.png";
import { useDarkMode } from "../DarkModeContext"; // Importing context if needed

export const Home = () => {
  const { isDarkMode } = useDarkMode(); // Access dark mode status from context

  return (
    <div className={`flex flex-col items-center justify-center h-screen`}
    >
      {/* Profile Image with Motion Animation */}
      <motion.img
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2, delay: 0 }} // No delay for the first motion
        className="h-[30vh]"
        src={profile}
        alt="profile"
      />

      {/* Name with Motion Animation */}
      <motion.h1
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2, delay: 0.4 }} // Delay of 0.4 seconds for the second motion
        className={`bg-white bg-clip-text text-5xl text-transparent font-poppins font-medium mt-[-2rem] mb-4 text-center ${
          isDarkMode ? "text-white" : "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text font-semibold" 
        }`}
      >
        <a className={`${isDarkMode ? "text-primary-skyblue" : "text-indigo-500"}`}>S</a>
        hofwan <a className={`${isDarkMode ? "text-primary-skyblue" : "text-sky-500 "}`}>S</a>
        hiddiq
      </motion.h1>

      {/* Role with Motion Animation */}
      <motion.h1
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2, delay: 0.9 }} // Delay of 0.9 seconds for the third motion
        className={`bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-2xl text-transparent font-poppins font-medium ${
          isDarkMode ? "text-neutral-300" : "text-black"
        }`}
      >
        Software Engineer
      </motion.h1>
    </div>
  );
};
