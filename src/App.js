import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="App">
      <Projects />
    </div>
  );
}

export default App;
