import React from "react";
import BaseForm from "../images/BaseForm.png";
import Super from "../images/Super.png";
import UltraInstinct from "../images/UltraInstinct.png";
import Super3 from "../images/Super3.png";
import SuperGod from "../images/SuperGod.png";
import styled, { keyframes } from "styled-components";

function Loading() {
  return (
    <Container>
      <NazGoku>
        <BaseContainer>
          {" "}
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
      <LoadText>Loading ...</LoadText>
    </Container>
  );
}

export default Loading;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: black;
  font-family: "Press Start 2P", cursive;
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
}
`;

const NazGoku = styled.div`
  position: relative;
  height: 72px;
  width: 72px;
  animation: ${Bounce} 1s infinite;
`;

const BaseContainer = styled.div`
  position: absolute;
  animation: ${EvolveStart} 1s forwards;
  animation-delay: 1s;
`;

const SuperContainer = styled.div`
  opacity: 0;
  position: absolute;
  animation: ${Evolve} 2s;
  animation-delay: 1s;
`;

const Super3Container = styled.div`
  opacity: 0;
  position: absolute;
  animation: ${Evolve} 2s;
  animation-delay: 2s;
`;

const SuperGodContainer = styled.div`
  opacity: 0;
  position: absolute;
  animation: ${Evolve} 2s;
  animation-delay: 3s;
`;

const UIContainer = styled.div`
  opacity: 0;
  position: absolute;
  animation: ${EvolveLast} 2s forwards;
  animation-delay: 4s;
`;

const LoadText = styled.div`
  margin-top: 10px;
`;
