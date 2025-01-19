import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { ProjectMockup } from "./components/ProjectMockup";
import { Contact } from "./components/Contact";
import { useDarkMode } from "./DarkModeContext";

const App = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();  // Accessing dark mode state and toggle function


  return (
    <div
      className={`${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-black text-neutral-300"
          : "bg-gray-200 text-black"
      } overflow-x-hidden antialiased selection:bg-gradient-to-br from-gray-900 to-black selection:text-white min-h-screen`}
    >
      <div className="container mx-auto px-8">
        {/* Pass the `isDarkMode` prop to Navbar */}
        <Navbar isDarkMode={isDarkMode} />
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><ProjectMockup/></div>
      </div>
      <div id="contact"><Contact /></div>

      {/* Dark Mode Toggle Button */}
       <button
        className="fixed bottom-4 right-4 p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default App;
