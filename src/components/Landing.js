import React from "react";
import styled, { keyframes } from "styled-components";

function Landing() {
  return (
    <Container>
      <MainText>
        <h1>Nazir Louis</h1>
        <h2>Robotics Engineer Turned Software Developer</h2>
        <p>
          ksjaf sajf kjsad fkjdsa ;kfjkdsajf kdjsa f;jkds;ajfk;sadj f;kjsad
          kf;jdsakfjksd;alj fkadjs kf;ldjsa f;kjdas k;fjdsaklf jadsk
        </p>
      </MainText>
    </Container>
  );
}

export default Landing;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  color: white;
`;

const SlideIn = keyframes`
0%, 100%{
    opactiy: 1;
}

50%{
    opacity:0;
}

`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${SlideIn} 5s infinite;
`;
