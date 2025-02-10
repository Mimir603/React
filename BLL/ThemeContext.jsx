import React, { createContext, useContext, useState } from "react";

//Создаем контекст
const ThemeContext = createContext();

//Провайдер контекста
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  //Функция для переключения темы
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

//Хук для удобного использования контекста
export const useTheme = () => useContext(ThemeContext);