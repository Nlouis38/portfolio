import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectList from "./components/ProjectList";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Landing />
      <Skills />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
