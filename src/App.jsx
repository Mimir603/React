import React from "react";
import "./App.css";
import { useTheme } from "./BLL/ThemeContext";

function App(){
  const { theme, toggleTheme} = useTheme();
  return (
      <div className={theme === "dark" ? "dark" : "light"}>
          <button onClick={toggleTheme}>Change theme</button>
          <h1>useContext</h1>
          <p>hello world</p>
          <p>{theme}</p>
      </div>
  );
}

export default App;