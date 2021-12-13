import { Container } from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";
import "./LoadingText.css";

function LoadingText() {
  return (
    <TextContainer>
      <LoadText>
        <L className="letter">L</L>
        <O className="letter">O</O>
        <A className="letter"> A</A>
        <D className="letter">D</D>
        <I className="letter">I</I>
        <N className="letter">N</N>
        <G className="letter">G</G>
        <P1 className="letter">.</P1>
        <P2 className="letter">.</P2>
        <P3 className="letter">.</P3>
      </LoadText>
    </TextContainer>
  );
}

export default LoadingText;

const TextContainer = styled.div`
  font-family: "Press Start 2P", cursive;
`;

const Scale1 = keyframes`
0% {
    transform:scale(1.0)
}

50%{
    transform:scale(1.2)
}
100%{
    transform:scale(1.0)
}
`;

const Scale2 = keyframes`
0% {
    transform:scale(1.2)
}

50%{
    transform:scale(1.0)
}
100%{
    transform:scale(1.2)
}
`;

const L = styled.div`
  animation: ${Scale1} 1s infinite;
`;

const O = styled.div`
  animation: ${Scale2} 1s infinite;
`;

const A = styled.div`
  animation: ${Scale1} 1s infinite;
`;

const D = styled.div`
  animation: ${Scale2} 1s infinite;
`;

const I = styled.div`
  animation: ${Scale1} 1s infinite;
`;

const N = styled.div`
  animation: ${Scale2} 1s infinite;
`;

const G = styled.div`
  animation: ${Scale1} 1s infinite;
`;

const P1 = styled.div`
  animation: ${Scale2} 1s infinite;
`;

const P2 = styled.div`
  animation: ${Scale1} 1s infinite;
`;

const P3 = styled.div`
  animation: ${Scale2} 1s infinite;
`;

const LoadText = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 16px;
`;
