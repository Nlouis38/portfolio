import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import "./Landing.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function Landing() {
  return (
    <Container>
      <MainText>
        <Hello>Hello, my name is</Hello>
        <Name>Nazir Louis</Name>
        <SubHeading>A Mechatronics Engineer turned Web Developer. </SubHeading>
      </MainText>
      <Footer>
        <FooterText>Learn More About What I Do</FooterText>
        <KeyboardDoubleArrowDownIcon className="downArrow" />
      </Footer>
    </Container>
  );
}

export default Landing;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  width: 100vw;
  color: black;
  position: absolute;
  z-index: 1;
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
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: black;
  margin-bottom: 20px;
  width: 50vw;
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

const SlideUp = keyframes`
0%{
  transform:translateY(100px)
}

100%{
  transform:translateY(0)
}`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  animation: ${SlideUp} 1s 1s backwards;
  .downArrow {
    animation: ${Bounce} 1s 1.5s infinite;
  }
`;

const FooterText = styled.div`
  font-size: 10px;
`;
