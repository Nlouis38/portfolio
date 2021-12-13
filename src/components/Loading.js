import React from "react";
import BaseForm from "../images/BaseForm.png";
import Super from "../images/Super.png";
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
      </NazGoku>
      Loading ...
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

const Evolve = keyframes`
0%{
    opacity:1;
}
100%{
    opacity:0;
}
`;

const NazGoku = styled.div`
  position: relative;
`;

const BaseContainer = styled.div`
  position: absolute;
`;

const SuperContainer = styled.div`
  position: absoolute;
`;
