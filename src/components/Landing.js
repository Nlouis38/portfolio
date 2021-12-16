import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import "./Landing.css";
import DownArrow from "../images/DownArrow.png";
import { Spring } from "react-spring";

function Landing() {
  return (
    <Container className="container">
      <MainText>
        <Hold>
          <Hello>Hello, my name is</Hello>
        </Hold>
        <Hold>
          <Name>Nazir Louis</Name>
        </Hold>
        <SubHeading>A Mechatronics Engineer turned Web Developer</SubHeading>
      </MainText>
      <Footer>
        <FooterText>Here Is My Story</FooterText>
        <DownArrowContainer>
          <img src={DownArrow} height="50px" width="50px" />
        </DownArrowContainer>
      </Footer>
    </Container>
  );
}

export default Landing;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100vw;
  color: white;
  font-family: "Press Start 2P", cursive;
  z-index: 1;
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  margin-top: 28%;
`;

const TypeEffect = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const Hold = styled.div`
  display: inline-block;
`;

const Hello = styled.div`
  font-size: 8px;
  color: #9faabb;
  margin-bottom: 20px;
  overflow: hidden;
  font-size: 10px;
  width: 0;
  white-space: nowrap;
  animation: ${TypeEffect} 1.5s steps(20, end) forwards;
`;

const Show = keyframes`
0%{
  opacity:0;
}
100%{
  opacity:1
}`;

const Name = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  overflow: hidden;
  white-space: nowrap;
  animation: ${TypeEffect} 1.5s 1.5s steps(20, end) backwards;
`;

const SlideDown = keyframes`
0%{
  transform: translateY(-1000px);
}
100%{
  transform:translateY(0);
}`;

const Blur = keyframes`
from{
  opacity:0;
  filter:blur(20px);
}
to{
  opacity:1;
  filter:blur(0px);
}`;

const SubHeading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  margin-bottom: 20px;
  opacity: 0;
  filter: blur(20px);
  animation: ${Blur} 1s 3s forwards;
`;

const Web = styled.div`
  color: black;
  margin-left: 15px;
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
  height: 320px;
  margin-bottom: 15px;
  opacity: 0;
  animation: ${Show} 2s 4s forwards, ${Bounce} 1s 4s infinite;
`;

const FooterText = styled.div`
  font-size: 10px;
`;

const DownArrowContainer = styled.div``;
