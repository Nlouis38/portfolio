import React from "react";
import styled, { keyframes } from "styled-components";
import "./Landing.css";
import { ReactComponent as DownArrow } from "../images/down-arrow.svg";
import Avatar from "../images/Rage.png";

function Landing() {
  return (
    <Container>
      <MainText>
        <AvatarContainer>
          <img src={Avatar} border-radius="50" />
        </AvatarContainer>
        <Hello>Hello, my name is</Hello>
        <Name>Nazir Louis</Name>
        <SubHeading>Robotics Engineer Turned Software Engineer</SubHeading>
      </MainText>
      <Footer>
        <FooterText>Learn More About What I Do</FooterText>
        <DownArrow className="downArrow" />
      </Footer>
    </Container>
  );
}

export default Landing;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  max-width: 100vw;
  margin-top: 250px;
`;

const AvatarContainer = styled.div`
  height: 112px;
  width: 112px;
  margin-bottom: 20px;
`;

const Hello = styled.div`
  font-size: 8px;
  color: #920060;
  margin-bottom: 20px;
`;

const Name = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SubHeading = styled.div`
  font-size: 18px;
  color: black;
  margin-bottom: 20px;
`;

const Bounce = keyframes`
0%,
20%,
50%,
80%,
100% {
  transform: translateY(0);
}

40% {
  transform: translateY(6px);
}

60% {
  transform: translateY(4px);
}
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  animation: ${Bounce} 1s infinite;
`;

const FooterText = styled.div`
  font-size: 10px;
`;
