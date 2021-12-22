import React from "react";
import styled, { keyframes } from "styled-components";
import NazLogo from "../images/Logo1.png";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  function homeScroll() {
    let skills = document.getElementById("homeId");
    skills.scrollIntoView();
  }
  function skillsScroll() {
    let skills = document.getElementById("skillsId");
    skills.scrollIntoView();
  }
  function projectsScroll() {
    let skills = document.getElementById("projectsId");
    skills.scrollIntoView();
  }
  function aboutMeScroll() {
    let skills = document.getElementById("aboutMeId");
    skills.scrollIntoView();
  }
  function contactScroll() {
    let skills = document.getElementById("contactId");
    skills.scrollIntoView();
  }
  return (
    <Wrap>
      <Nav>
        <Logo onClick={homeScroll}>
          <img src={NazLogo} />
        </Logo>
        <RightMenu>
          <div onClick={skillsScroll}>Skills</div>
          <div onClick={projectsScroll}>Projects</div>
          <div onClick={aboutMeScroll}>About Me</div>
          <div onClick={contactScroll}>Contact</div>
          <MenuIcon className="menuIcon" />
        </RightMenu>
      </Nav>
    </Wrap>
  );
}

export default Header;

const Wrap = styled.div`
  position: absolute;
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
  background-color: black;
  position: sticky;
  top: 0;
  height: 60px;
  z-index: 10;
`;

const Swing = keyframes`
    15%
    {
        transform: translateX(5px);
    }
    30%
    {
        transform: translateX(-5px);
    }
    50%
    {
        transform: translateX(3px);
    }
    65%
    {
        transform: translateX(-3px);
    }
    80%
    {
        transform: translateX(2px);
    }
    100%
    {
        transform: translateX(0);
    }
`;

const Shake = keyframes`
    15%
    {
        transform: translateX(5px);
        transform: translateY(5px);
    }
    30%
    {
        transform: translateX(-5px);
        transform: translate3(-5px);
    }
    50%
    {
        transform: translateX(3px);
        transform: translateY(3px);
    }
    65%
    {
        transform: translateX(-3px);
        transform: translateY(-3px);
    }
    80%
    {
        transform: translateX(2px);
        transform: translateY(2px);
    }
    100%
    {
        transform: translateX(0);
        transform: translateY(0);
    }
`;

const Show = keyframes`
0%{
  opacity:0;
}
100%{
  opacity:1
}`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  opacity: 0;
  width: 100vw;
  animation: ${Show} 2s 2s forwards;
  max-width: 100%;
  img {
    height: 60px;
  }

  img:hover {
    cursor: pointer;
    animation: ${Shake} 0.5s ease;
  }
`;

const Logo = styled.div``;

const Color = keyframes`
from{
  color:white;
}
to{
  color:gray;
}`;

const RightMenu = styled.div`
  color: white;
  display: flex;
  font-family: "Press Start 2P", cursive;
  font-size: 12px;
  margin-right: 20px;
  z-index: 9;

  div {
    padding: 10px;
    @media (max-width: 699px) {
      display: none;
    }
  }

  .menuIcon {
    @media (min-width: 700px) {
      display: none;
    }
  }

  .menuIcon:hover {
    cursor: pointer;
  }

  .menuIcon:active {
    transform: scale(0.9, 0.9);
  }

  div:hover {
    cursor: pointer;
    animation: ${Swing} 1s ease, ${Color} 0.5s forwards;
  }
`;
