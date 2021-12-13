import React from "react";
import styled, { keyframes } from "styled-components";
import "./Landing.css";

function Landing() {
  return (
    <Container>
      <MainText>
        <Name className="text">Nazir Louis</Name>
        <SubHeading className="text">
          Robotics Engineer Turned Software Engineer
        </SubHeading>
        <About className="text">
          Sarah watched the whirlpool mesmerized. She couldn't take her eyes off
          the water swirling around and around. She stuck in small twigs and
          leaves to watch the whirlpool catch them and then suck them down. It
          bothered her more than a little bit that this could also be used as a
          metaphor for her life.
        </About>
      </MainText>
    </Container>
  );
}

export default Landing;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: gray;
  color: black;
  font-family: "Press Start 2P", cursive;
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50vw;
  margin: 50px;
`;

const Name = styled.div`
  font-size: 16px;
`;

const SubHeading = styled.div`
  font-size: 10px;
  color: white;
`;

const About = styled.div`
  display: flex;
  font-size: 8px;
`;
