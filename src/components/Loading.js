import React, { useState } from "react";
import LoadingText from "./LoadingText";
import BaseForm from "../images/BaseForm.png";
import Super from "../images/Super.png";
import UltraInstinct from "../images/UltraInstinct.png";
import Super3 from "../images/Super3.png";
import SuperGod from "../images/SuperGod.png";
import styled, { keyframes } from "styled-components";

function Loading() {
  const [Loading, setLoading] = useState(true);
  return (
    <Container>
      <NazGoku>
        <BaseContainer>
          <img src={BaseForm} />
        </BaseContainer>
        <SuperContainer>
          <img src={Super} />
        </SuperContainer>
        <Super3Container>
          <img src={Super3} />
        </Super3Container>
        <SuperGodContainer>
          <img src={SuperGod} />
        </SuperGodContainer>
        <UIContainer>
          <img src={UltraInstinct} />
        </UIContainer>
      </NazGoku>
      <LoadingText />
    </Container>
  );
}

export default Loading;

const Slide = keyframes`
0%{
  transform: translateY(0)
}
100%{
  transform: translateY(-100%)
}
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: black;
  position: absolute;
  z-index: 9;
  animation: ${Slide} 1s ease-in forwards;
  animation-delay: 5s;
`;

const EvolveStart = keyframes`
0%{
    opacity:1;
}
100%{
    opacity:0;
}
`;

const Evolve = keyframes`
0%{
    opacity:0;
}
50%{
    opacity:1;
}
100%{
    opacity:0;
}
`;

const EvolveLast = keyframes`
0%{
    opacity:0;
}
100%{
    opacity:1;
}
`;

const Bounce = keyframes`
  0%,
  50%,
  100% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(2px);
  }

  75%{
    transform: translateY(-2px);
  }
}
`;

const NazGoku = styled.div`
  position: relative;
  height: 72px;
  width: 72px;
  animation: ${Bounce} 0.3s infinite;
`;

const BaseContainer = styled.div`
  position: absolute;
  animation: ${EvolveStart} 1.5s forwards;
  animation-delay: 0.5s;
`;

const SuperContainer = styled.div`
  opacity: 0;
  position: absolute;
  animation: ${Evolve} 1.5s;
  animation-delay: 0.5s;
`;

const Super3Container = styled.div`
  opacity: 0;
  position: absolute;
  animation: ${Evolve} 1.5s;
  animation-delay: 1s;
`;

const SuperGodContainer = styled.div`
  opacity: 0;
  position: absolute;
  animation: ${Evolve} 1.5s;
  animation-delay: 1.5s;
`;

const UIContainer = styled.div`
  opacity: 0;
  position: absolute;
  animation: ${EvolveLast} 1.5s forwards;
  animation-delay: 2s;
`;
