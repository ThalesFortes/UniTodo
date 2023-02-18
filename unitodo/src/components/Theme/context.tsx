import { useState, createContext,useEffect } from "react";

interface ThemeData {
isDarkMode: boolean
handledarkmode: () => void
}

export const TemaContext = createContext({} as ThemeData)

export const TemaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(() => {
      const storedTheme = localStorage.getItem('theme');
      return storedTheme === 'dark';
    });
  
    useEffect(() => {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);
  
    const handledarkmode = () => {
      setDarkMode((prevMode) => !prevMode);
    };
  
    return (
      <TemaContext.Provider value={{ isDarkMode: isDarkMode, handledarkmode: handledarkmode }}>
        {children}
      </TemaContext.Provider>
    );
  };
  