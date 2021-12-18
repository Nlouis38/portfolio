import React from "react";
import styled, { keyframes } from "styled-components";
import { Skeleton } from "@mui/material";

function Projects() {
  return (
    <Container>
      <Text>
        <Skeleton
          className="text"
          variant="rectangular"
          width={400}
          height={50}
        />
        <Skeleton
          className="text"
          variant="rectangular"
          width={400}
          height={300}
        />
        <Buttons>
          <SourceBtn>Source Code</SourceBtn>
          <DemoBtn>Demo</DemoBtn>
        </Buttons>
      </Text>
      <Content>
        <Skeleton
          className="image"
          variant="rectangular"
          width={300}
          height={300}
        />
        <Skeleton
          className="image"
          variant="rectangular"
          width={300}
          height={300}
        />
        <Skeleton
          className="image"
          variant="rectangular"
          width={300}
          height={300}
        />
      </Content>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  max-width: 100%;
  overflow-x: hidden;
  background-color: red;
  display: flex;
  justify-content: space-around;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  .text {
    margin: 10px;
  }
`;

const Buttons = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  width: 420px;
  font-family: "Bakbak One", cursive;
  font-size: 22px;
`;

const SourceBtn = styled.div`
  background-color: white;
  margin: 10px;
  width: 200px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

const DemoBtn = styled.div`
  background-color: white;
  margin: 10px;
  width: 180px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  .image {
    margin: 10px;
  }
`;
