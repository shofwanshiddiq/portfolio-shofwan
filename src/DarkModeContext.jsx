import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation

// Create the context
const DarkModeContext = createContext();

// Create a provider component
export const DarkModeProvider = ({ children }) => {
  // Set the default state to true (dark mode)
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Prop validation
DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook for easier usage
export const useDarkMode = () => useContext(DarkModeContext);
