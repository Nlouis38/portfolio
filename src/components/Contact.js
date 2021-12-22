import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";

function Contact() {
  return (
    <Container id="contactId">
      <Text data-aos="fade-up">Email:Nazirlouis38@gmail.com</Text>
      <Text data-aos="fade-up">Number:1-646-596-6598</Text>
      <Link href="./images/Resume.pdf" download>
        <Download data-aos="fade-up">Download Resume</Download>
      </Link>
      <Socials data-aos="fade-up">
        <a
          href="https://www.linkedin.com/in/nazir-louis-b19130190/"
          target="_blank"
        >
          <LinkedInIcon className="icon" />
        </a>
        <a href="https://twitter.com/robowebdev" target="_blank">
          <TwitterIcon className="icon" />
        </a>
        <a href="https://github.com/Nlouis38" target="_blank">
          <GitHubIcon className="icon" />
        </a>
      </Socials>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  color: white;
  margin: 10px;
  width: 100vw;
  max-width: 100%;
  @media (max-width: 770px) {
    height: auto;
    margin: 100px 0px;
  }
`;

const Text = styled.div`
  font-family: "Press Start 2P", cursive;
  margin: 10px;
  font-size: 16px;
  @media (max-width: 550px) {
    font-size: 10px;
  }
`;

const Socials = styled.div`
  .icon {
    transform: scale(1.8);
    margin: 20px;
  }
  a {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
    color: white;
  }

  a:hover {
    color: gray;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: black;

  :visited {
    color: black;
  }

  :hover {
  }
`;

const Download = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 300px;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  :hover {
    background-color: gray;
    color: white;
  }
`;
