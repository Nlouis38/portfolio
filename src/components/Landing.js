import React from "react";
import styled, { keyframes } from "styled-components";

function Landing() {
  return (
    <Container>
      <MainText>
        <Name>Nazir Louis</Name>
        <SubHeading>Robotics Engineer Turned Software Engineer</SubHeading>
        <About>
          ksjaf sajf kjsad fkjdsa ;kfjkdsajf kdjsa f;jkds;ajfk;sadj f;kjsad
          kf;jdsakfjksd;alj fkadjs kf;ldjsa f;kjdas k;fjdsaklf jadsk
        </About>
      </MainText>
    </Container>
  );
}

export default Landing;

const Container = styled.div`
  padding: 20px;
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
  align-items: center;
`;

const Name = styled.div`
  font-size: 32px;
`;

const SubHeading = styled.div`
  font-size: 24px;
`;

const About = styled.div`
  display: flex;
  font-size: 16px;
`;
