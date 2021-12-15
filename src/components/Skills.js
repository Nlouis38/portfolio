import React from "react";
import styled from "styled-components";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import PsychologyIcon from "@mui/icons-material/Psychology";

function Skills() {
  return (
    <Container>
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
            <li>Flex Box</li>
            <li>CSS Grid</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
        </FrontEnd>
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
      </SkillsList>
    </Container>
  );
}

export default Skills;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  background-color: #04142d;
`;

const SkillsList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
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
  height: 500px;
  border-radius: 10px;
  min-width: 200px;
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
  height: 500px;
  border-radius: 10px;
  min-width: 200px;
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
  height: 500px;
  border-radius: 10px;
  min-width: 200px;
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
