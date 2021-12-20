import React from "react";
import styled, { keyframes } from "styled-components";
import { Skeleton } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

function Projects({ title, details, image1, video1 }) {
  return (
    <Container className="projectContainer">
      <Wrap>
        <Text className="text">
          <h1 data-aos="fade-down">{title}</h1>
          <p data-aos="fade-right">{details}</p>
        </Text>
        <Buttons>
          <SourceBtn data-aos="zoom-out">
            <a href="https://github.com/Nlouis38/tesla-clone">Source Code</a>
          </SourceBtn>
          <DemoBtn data-aos="zoom-out">
            <a href="https://www.google.com/">Demo</a>
          </DemoBtn>
        </Buttons>
      </Wrap>
      <Content>
        <img data-aos="fade-left" src={image1} width="400" />
        <img data-aos="fade-up" src={video1} width="400" />
      </Content>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  width: 100vw;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
  margin-top: 100px;
  @media (max-width: 450px) {
    margin-bottom: 100px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Press Start 2P", cursive;
    font-size: 14px;
    margin-bottom: 20px;
  }

  p {
    font-family: "Bakbak One", cursive;
  }

  h1,
  p {
    padding: 10px;
    background-color: white;
    color: black;
    border-radius: 10px;
  }
`;

const Buttons = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  width: 420px;
  font-family: "Bakbak One", cursive;
  font-size: 22px;
  margin-top: 20px;

  @media (max-width: 400px) {
    flex-direction: column;
    width: 350px;
    align-items: center;
  }
`;

const SourceBtn = styled.div`
  background-color: white;
  width: 190px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 400px) {
    width: 350px;
    margin-bottom: 10px;
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
  width: 190px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  a {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 400px) {
    width: 350px;
    margin-left: 0px;
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
  img {
    margin: 10px;
    border-radius: 10px;
  }
  @media (max-width: 400px) {
    img {
      width: 325px;
    }
  }
`;
