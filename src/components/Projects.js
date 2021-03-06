import React from "react";
import styled, { keyframes } from "styled-components";
import { Skeleton } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

function Projects({ title, details, image1, video1, sourcecode, demo }) {
  return (
    <Container id="projectsId" className="projectContainer">
      <Wrap>
        <Text className="text">
          <Title data-aos="fade-down">{title}</Title>
          <p data-aos="fade-right">{details}</p>
        </Text>
        <Buttons>
          <a href={sourcecode} target="_blank">
            <SourceBtn data-aos="zoom-out">Source Code</SourceBtn>
          </a>
          <a href={demo} target="_blank">
            <DemoBtn
              href="https://boring-ritchie-aede20.netlify.app/"
              target="_blank"
              data-aos="zoom-out"
            >
              Demo
            </DemoBtn>
          </a>
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
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
  @media (max-width: 770px) {
    height: auto;
    margin: 100px 0px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  p {
    font-family: "Bakbak One", cursive;
    color: white;
    line-height: 2;
  }
`;

const Title = styled.div`
  font-family: "Press Start 2P", cursive;
  font-size: 14px;
  color: white;
`;

const Buttons = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  width: 420px;
  font-family: "Bakbak One", cursive;
  font-size: 22px;
  margin-top: 20px;

  a {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }

  a:active {
    transform: scale(0.9, 0.9);
  }

  @media (max-width: 770px) {
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

  @media (max-width: 770px) {
    width: 350px;
    margin-bottom: 10px;
  }
  :hover {
    cursor: pointer;
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
    color: black;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 770px) {
    width: 350px;
    margin-left: 0px;
  }
  :hover {
    cursor: pointer;
  }
  a:active {
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
  @media (max-width: 770px) {
    img {
      width: 325px;
    }
  }
`;
