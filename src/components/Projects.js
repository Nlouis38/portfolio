import React from "react";
import styled, { keyframes } from "styled-components";
import { Skeleton } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

function Projects({ title, details, image1, video1 }) {
  return (
    <Container className="projectContainer">
      <Text className="text">
        <h1>{title}</h1>
        <p>{details}</p>
      </Text>
      <Buttons>
        <SourceBtn data-aos="zoom-out">Source Code</SourceBtn>
        <DemoBtn data-aos="zoom-out">Demo</DemoBtn>
      </Buttons>
      <Content>
        <img src={image1} />
        <img src={video1} />
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

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
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
  @media (max-width: 450px) {
    width: 300px;
  }
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
  @media (max-width: 450px) {
    width: 300px;
  }
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
