import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import "./Landing.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function Landing() {
  return (
    <Container>
      <MainText>
        <Hold>
          <Hello>Hello, my name is</Hello>
        </Hold>
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

const TypeEffect = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const Hold = styled.div`
  display: inline-block;
`;

const Hello = styled.div`
  font-size: 8px;
  color: #920060;
  margin-bottom: 20px;
  overflow: hidden;
  border-right: 0.15em solid black;
  font-size: 8px;
  width: 0;
  white-space: nowrap;
  animation: ${TypeEffect} 1s steps(20, end) forwards;
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
  opacity: 0;
  animation: ${Show} 2s 1.2s forwards;
`;

const SlideDown = keyframes`
0%{
  transform: translateY(-1000px);
}
100%{
  transform:translateY(0);
}`;

const SubHeading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: black;
  margin-bottom: 20px;
  animation
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
  animation: ${SlideUp} 1s 3s backwards;
  .downArrow {
    animation: ${Bounce} 1s 4s infinite;
  }
`;

const FooterText = styled.div`
  font-size: 10px;
`;
