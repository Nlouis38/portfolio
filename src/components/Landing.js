import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import "./Landing.css";
import DownArrow from "../images/DownArrow.png";
import AOS from "aos";
import "aos/dist/aos.css";

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
        <SubHeading>A Mechatronics Engineer turned</SubHeading>
        <SubHeading>Web Developer</SubHeading>
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
  align-items: center;
  justify-content: flex-end;
  color: white;
  font-family: "Press Start 2P", cursive;
  max-width: 100%;
  overflow-x: hidden;
`;

const MainText = styled.div`
  position: absolute;
  top: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  justify-content: flex-end;
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
  @media (max-width: 400px) {
    font-size: 8px;
  }
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
  @media (max-width: 400px) {
    font-size: 16px;
  }
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
  flex-wrap: wrap;
  font-size: 14px;
  margin-bottom: 20px;
  opacity: 0;
  filter: blur(20px);
  animation: ${Blur} 1s 3s forwards;
  @media (max-width: 400px) {
    font-size: 10px;
  }
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
  margin-bottom: 50px;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${Show} 2s 4s forwards, ${Bounce} 1s 4s infinite;
`;

const FooterText = styled.div`
  font-size: 10px;
`;

const DownArrowContainer = styled.div``;
