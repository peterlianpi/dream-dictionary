// DarkModeToggle.js
import React, { useState, useEffect } from "react";
import { useDarkMode } from "./DarkModeContext";
import Sun from "./img/sun.svg"; // Replace with the correct path to your sun.svg file
import Moon from "./img/moon.svg"; // Replace with the correct path to your moon.svg file
import "./DarkModeToggle.css";
import "./App.css";

function DarkModeToggle() {
  const { toggleDarkMode, darkMode } = useDarkMode();
  const [icon, setIcon] = useState(darkMode ? Moon : Sun);

  useEffect(() => {
    // Function to toggle dark mode
    const toggleTheme = () => {
      if (darkMode) {
        setIcon(Sun);
      } else {
        setIcon(Moon);
      }
    };
    // Update the icon when dark mode changes
    toggleTheme();
  }, [darkMode]);
  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      <div
        className={
          darkMode
            ? "theme-container shadow-dark"
            : "theme-container shadow-light"
        }
      >
        <img
          id="theme-icon"
          src={icon} // Set the initial icon based on the theme
          alt="Theme Icon"
        />
      </div>
    </div>
  );
}

export default DarkModeToggle;
