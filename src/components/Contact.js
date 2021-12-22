import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";

function Contact() {
  return (
    <Container>
      <Text>Email: Nazirlouis38@gmail.com</Text>
      <Text>Number: 1-646-596-6598</Text>
      <Link href="">
        <Download>Download Resume</Download>
      </Link>
      <Socials>
        <a href="https://www.linkedin.com/in/nazir-louis-b19130190/">
          <LinkedInIcon className="icon" />
        </a>
        <a href="https://twitter.com/robowebdev">
          <TwitterIcon className="icon" />
        </a>
        <a href="https://github.com/Nlouis38">
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
  height: 400px;
  color: white;
  margin: 10px;
`;

const Text = styled.div`
  font-family: "Press Start 2P", cursive;
  margin: 10px;
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
  font-family: "Press Start 2P", cursive;

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
