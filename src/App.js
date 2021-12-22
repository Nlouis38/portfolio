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
import TeslaImage from "./images/TeslaImage.png";
import TeslaVideo from "./images/TeslaVideo.gif";

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
      <Projects
        title="Tesla Clone"
        details="This project was used to practice my skills in copying an exact version of a website. 
        I was able to do this using React with styled components. Props were used for most of the components
        so I did not have to remake the same component multiple times, this is one of the benefits of React!"
        image1={TeslaImage}
        video1={TeslaVideo}
        sourcecode="https://github.com/Nlouis38/tesla-clone"
        demo="https://61c3985f4bd53f988b189ed1--boring-ritchie-aede20.netlify.app/"
      />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
