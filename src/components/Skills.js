import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";

function Skills() {
  return (
    <Container id="skillsId">
      <Title data-aos="fade-right" className="title">
        SKILLS
      </Title>
      <SkillsList className="skillList">
        <FrontEnd className="frontEnd" data-aos="fade-right">
          <div>
            Languages
            <WebIcon />
          </div>
          <ul>
            <li>Python</li>
            <li>C++</li>
            <li>Javascript</li>
            <li>HTML/CSS</li>
            <li>MATLAB</li>
          </ul>
        </FrontEnd>

        <BackEnd data-aos="fade-right">
          <div>
            Libaries
            <StorageIcon />
          </div>
          <ul>
            <li>OpenCV</li>
            <li>Numpy</li>
            <li>Tensor Flow</li>
            <li>React</li>
            <li>Numpy</li>
          </ul>
        </BackEnd>
        <General data-aos="fade-right">
          <div>
            General
            <PsychologyIcon />
          </div>
          <ul>
            <li>Git Version Control</li>
            <li>Problem Solving</li>
            <li>VS Code</li>
            <li>PyCharm</li>
            <li>Web Hosting</li>
            <li>Machine Leearning</li>
            <li>Computer Vision</li>
          </ul>
        </General>
      </SkillsList>
    </Container>
  );
}

export default Skills;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  max-width: 100%;
  overflow: hidden;
  margin: 10px;
  height: 100vh;
  @media (max-width: 770px) {
    height: auto;
  } ;
`;

const Title = styled.div`
  font-family: "Press Start 2P", cursive;
  font-size: 24px;
  margin-top: 50px;
`;

const SkillsList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  li {
    list-style: none;
    font-family: "Bakbak One", cursive;
    font-size: 16px;
  }
`;

const FrontEnd = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  color: black;
  width: 300px;
  height: 450px;
  border-radius: 10px;
  margin: 20px 20px;
  div {
    display: flex;
    align-items: center;
    font-family: "Press Start 2P", cursive;
    font-size: 14px;
    margin: 10px 0px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      margin: 10px;
    }
  }
`;

const BackEnd = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
  width: 300px;
  height: 450px;
  border-radius: 10px;
  margin: 20px 20px;
  div {
    display: flex;
    align-items: center;
    font-family: "Press Start 2P", cursive;
    font-size: 14px;
    margin: 10px 0px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      margin: 10px;
    }
  }
`;

const General = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  color: black;
  width: 300px;
  height: 450px;
  border-radius: 10px;
  margin: 20px 20px;
  div {
    display: flex;
    align-items: center;
    font-family: "Press Start 2P", cursive;
    font-size: 14px;
    margin: 10px 0px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      margin: 10px;
    }
  }
`;
