import React from "react";
import styled, { keyframes } from "styled-components";
import { Skeleton } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

function Projects() {
  return (
    <Container className="projectContainer">
      <Text className="text">
        <Skeleton
          data-aos="fade-right"
          className="text"
          variant="rectangular"
          width={400}
          height={50}
        />
        <Skeleton
          data-aos="fade-right"
          className="text"
          variant="rectangular"
          width={400}
          height={300}
        />
        <Buttons data-aos="zoom-out">
          <SourceBtn>Source Code</SourceBtn>
          <DemoBtn>Demo</DemoBtn>
        </Buttons>
      </Text>
      <Content>
        <Skeleton
          data-aos="flip-up"
          className="image"
          variant="rectangular"
          width={500}
          height={300}
        />
        <Skeleton
          data-aos="flip-down"
          className="image"
          variant="rectangular"
          width={500}
          height={300}
        />
      </Content>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  width: 100vw;
  color: white;
  max-width: 100%;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  :active {
    transform: scale(0.9, 0.9);
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
  :active {
    transform: scale(0.9, 0.9);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 100px;
  .image {
    margin: 10px;
  }
`;
