import React, { useState, useEffect } from 'react';


const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage to persist theme choice
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedTheme);
  }, []);

  useEffect(() => {
    // Apply dark mode class to body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  return (
    <button className="bg-violet-500 text-white px-4 py-2 rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
      Toggle Dark Mode
    </button>
  );
};

export default ThemeSwitcher;
