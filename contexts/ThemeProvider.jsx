'use client';

import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // const preferredThemeMode = localStorage.getItem('themeMode') || 'dark';
  let preferredThemeMode;

  if (typeof window !== 'undefined') {
    preferredThemeMode = localStorage.getItem('themeMode');
  }

  const [themeMode, setThemeMode] = useState(preferredThemeMode || 'dark');

  const lightTheme = () => {
    setThemeMode('light');
  };

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const themeInfo = {
    lightTheme,
    darkTheme,
    themeMode,
  };

  // IMPORTANT:
  //* Actual Change In Theme Inside DOM || Toggle Dark / Light Theme
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeContext.Provider value={themeInfo}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
