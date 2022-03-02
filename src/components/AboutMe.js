import React from "react";
import styled, { keyframes } from "styled-components";
import Avi from "../images/Rage.png";

function AboutMe() {
  return (
    <Container id="aboutMeId">
      <Text>
        <Title data-aos="zoom-in" data-aos-duration="2000">
          About Me
        </Title>
        <Info data-aos="zoom-in" data-aos-duration="2000">
          Hello everyone, my name is Nazir Louis I have formal education in
          Mechanical Engineering achieving a Bachelors degree from Georgia
          Southern University. My passion has always been mechatronics and
          automation, combining my knowledge of mechanical engineering,
          electrical engineering, and programming to create automated systems
          that make our lives easier. Currently, I work as a Test Engineer at
          Home Depot where I manage and delegate the testing of Home Depot
          Products. This also consists of building automated fixtures in order
          to test the life cycle of a product as well as speed up and streamline
          our testing process! Technologies that I use frequently consist of but
          are not limited to Python, C++, Raspberry Pi, Arduino, and PLCs.
        </Info>
      </Text>
      <img src={Avi} data-aos="zoom-out" data-aos-duration="3000" />
    </Container>
  );
}

export default AboutMe;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 10px;
  max-width: 100%;
  overflow: hidden;
  @media (max-width: 770px) {
    flex-direction: column;
    height: auto;
    margin: 100px 0px;
  }
  color: white;
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: 10px;

    @media (max-width: 770px) {
      width: 200px;
      height: 200px;
    }
  }
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
  margin: 20px;
  line-height: 2;
`;
