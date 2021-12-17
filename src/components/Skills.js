import React from "react";
import styled, { keyframes } from "styled-components";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import PsychologyIcon from "@mui/icons-material/Psychology";

function Skills() {
  return (
    <Container>
      <Hold2>
        <Title>SKILLS</Title>
        <SkillsList>
          <FrontEnd>
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
            <BackEnd>
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
            <General>
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
      </Hold2>
    </Container>
  );
}

export default Skills;

const Hold2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const SlideRight = keyframes`
from{
  opacity:0;
  transform:translateX(-100px);
}

to{
  opacity:1;
  transform:translateX(0)
}

`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: white;
  background-color: #04142d;
  max-width: 100%;
  min-height: 600px;
  mar
`;

const Title = styled.div`
  margin-top: ;
  font-family: "Press Start 2P", cursive;
  font-size: 24px;
  opacity: 0;
  animation: ${SlideRight} 2s forwards;
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
  min-width: 150px;
  margin: 20px 20px;
  opacity: 0;
  animation: ${SlideRight} 2s 1.5s forwards;
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
  min-width: 150px;
  margin: 25px 0px;
  opacity: 0;
  animation: ${SlideRight} 2s 0.5s forwards;
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
  min-width: 150px;
  margin: 25px 0px;
  opacity: 0;
  animation: ${SlideRight} 2s 1s forwards;
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
