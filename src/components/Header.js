import React from "react";
import styled, { keyframes } from "styled-components";
import NazLogo from "../images/Logo1.png";

function Header() {
  return (
    <div>
      <Nav>
        <Logo>
          <img src={NazLogo} />
        </Logo>
        <RightMenu>
          <div>Skills</div>
          <div>Projects</div>
          <div>Resume</div>
          <div>About Me</div>
          <div>Contact</div>
        </RightMenu>
      </Nav>
    </div>
  );
}

export default Header;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  img {
    height: 60px;
  }

  img:hover {
    cursor: pointer;
  }
`;

const Logo = styled.div`
  margin-left: 20px;
  font-family: "Herr Von Muellerhoff", cursive;
  font-size: 24px;
`;

const Swing = keyframes`
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
        transform: translateX(-5px);
    }
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
`;

const Color = keyframes`
from{
  color:white;
}
to{
  color:black;
}`;

const RightMenu = styled.div`
  color: white;
  display: flex;
  font-family: "Press Start 2P", cursive;
  font-size: 10px;
  margin-right: 20px;

  div {
    padding: 10px;
  }

  div:hover {
    cursor: pointer;
    animation: ${Swing} 1s ease, ${Color} 0.5s forwards;
  }
`;
