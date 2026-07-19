import { createContext, useState, useMemo, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const themeValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );

  return (
    <div className={theme} id="mainContainer">
      <ThemeContext.Provider value={themeValue}>
        <Header />
        <Hero />
      </ThemeContext.Provider>
    </div>
  );
}
export default App;
export { ThemeContext };
