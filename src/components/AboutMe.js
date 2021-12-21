import React from "react";
import styled, { keyframes } from "styled-components";
import Avatar from "../images/Rage.png";

function AboutMe() {
  return (
    <Container>
      <Text>
        <Title>About Me</Title>
        <Info>
          Currently I work as Lead Test Engineer for Home Depot, I handle the
          Automation and Robotic testing of all company products. My most used
          tools are C++ and Python in order to program mechanical robotic
          systems as well as computer vision applications. The reason for me
          making the move from Robotics to Software and Web Development boils
          down to my passion for programming. In my current role I would say
          about 15%-30% of my job is programming depending on the day, but I
          will like to be in a position where majority, if not all my day is
          spent programming and problem solving. I love learning new program
          languages and I feel like it is a field that I can never get board in
          because it is always evolving quickly!
        </Info>
      </Text>
      <Avatar />
    </Container>
  );
}

export default AboutMe;

const Container = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
`;

const Title = styled.div`
  font-family: "Press Start 2P", cursive;
`;

const Info = styled.div`
  font-family: "Bakbak One", cursive;
  font-size: 16px;
  margin: 10px;
`;
