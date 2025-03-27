import React, { createContext, useState } from 'react';
import { ThemeContext } from './allContexts';

// Create the context
// export const ThemeContext = createContext();

// ThemeProvider component to provide the theme context
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme is light

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
