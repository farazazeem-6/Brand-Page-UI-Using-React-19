import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";


function App() {
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  return (
    <div>
        <Header />
        <Hero />
    </div>
  );
}

export default App;
