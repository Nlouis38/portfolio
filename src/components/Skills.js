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
            <PsychologyIcon />
          </div>
          <ul>
            <li>Python</li>
            <li>C/C++</li>
            <li>Javascript</li>
            <li>HTML/CSS</li>
            <li>MATLAB</li>
            <li>Arduino</li>
          </ul>
        </FrontEnd>

        <BackEnd data-aos="fade-right">
          <div>
            Data and Automation
            <StorageIcon />
          </div>
          <ul>
            <li>OpenCV</li>
            <li>Numpy</li>
            <li>Tensor Flow</li>
            <li>Embedded Systems</li>
            <li></li>
            <li></li>
          </ul>
        </BackEnd>
        <General data-aos="fade-right">
          <div>
            Web Development
            <WebIcon />
          </div>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Styled Components</li>
            <li>Redux</li>
            <li>Django</li>
            <li>Flask</li>
            <li></li>
            <li></li>
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
