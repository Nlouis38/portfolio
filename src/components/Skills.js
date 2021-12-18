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
    <Container>
      <Title data-aos="fade-right" className="title">
        SKILLS
      </Title>
      <SkillsList className="skillList">
        <FrontEnd
          className="frontEnd"
          data-aos="fade-right"
          data-aos-delay="750"
        >
          <div>
            Front-End
            <WebIcon />
          </div>
          <ul>
            <li>React.js</li>
            <li>Redux</li>
            <li>Styled Components</li>
            <li>Material UI</li>
            <li>Javascript</li>
            <li>Flex Box</li>
            <li>CSS Grid</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
        </FrontEnd>
        <Hold>
          <BackEnd data-aos="fade-right" data-aos-delay="250">
            <div>
              Back-End
              <StorageIcon />
            </div>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>C++</li>
            </ul>
          </BackEnd>
          <General data-aos="fade-right" data-aos-delay="500">
            <div>
              General
              <PsychologyIcon />
            </div>
            <ul>
              <li>Git Version Control</li>
              <li>Machine Learning</li>
              <li>Computer Vision</li>
            </ul>
          </General>
        </Hold>
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
  width: 100vw;
  color: white;
  max-width: 100%;
  overflow-x: hidden;
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

  margin-bottom: 100px;
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

const Hold = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackEnd = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
  width: 300px;
  height: 200px;
  border-radius: 10px;
  margin: 25px 0px;
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
  height: 200px;
  border-radius: 10px;
  margin: 25px 0px;
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
