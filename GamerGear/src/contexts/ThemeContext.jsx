import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Try to get the user's preference from localStorage
    const savedTheme = localStorage.getItem('gamerGearTheme');
    
    if (savedTheme) {
      return savedTheme === 'dark';
    } else {
      // Check if user prefers dark mode from system preferences
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  // Apply theme class to the body element
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('gamerGearTheme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('gamerGearTheme', 'light');
    }
  }, [isDarkTheme]);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeContext;
