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
            <li>SQL</li>
            <li>R</li>
            <li>C/C++</li>
            <li>MATLAB</li>
            <li>VBA</li>
          </ul>
        </FrontEnd>

        <BackEnd data-aos="fade-right">
          <div>
            Data Analysis
            <StorageIcon />
          </div>
          <ul>
            <li>Pandas</li>
            <li>OpenCV</li>
            <li>Numpy</li>
            <li>TidyVerse</li>
            <li>Exel/Google Sheets</li>
            <li>Big Query</li>
            <li>MySQL</li>
          </ul>
        </BackEnd>
        <General data-aos="fade-right">
          <div>
            Data Visualization
            <WebIcon />
          </div>
          <ul>
            <li>Tableau</li>
            <li>Seaborn</li>
            <li>Excel Visualizations</li>
            <li>Matplotlib</li>
            <li></li>
            <li></li>
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
