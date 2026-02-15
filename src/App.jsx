import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

const ThemeProvider = createContext();
function App() {
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log("Toggling");
  }
  return (
    <div className={theme} id="mainContainer">
      <ThemeProvider value={{ theme, toggleTheme }}>
        <Header />
        <Hero />
      </ThemeProvider>
    </div>
  );
}
export default App;
export { ThemeProvider };
