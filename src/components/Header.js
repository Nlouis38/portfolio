import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import NazLogo from "../images/Logo1.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  function homeScroll() {
    let skills = document.getElementById("homeId");
    skills.scrollIntoView();
    setBurgerStatus(false);
  }
  function skillsScroll() {
    let skills = document.getElementById("skillsId");
    skills.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
    setBurgerStatus(false);
  }
  function projectsScroll() {
    let skills = document.getElementById("projectsId");
    skills.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
    setBurgerStatus(false);
  }
  function aboutMeScroll() {
    let skills = document.getElementById("aboutMeId");
    skills.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
    setBurgerStatus(false);
  }
  function contactScroll() {
    let skills = document.getElementById("contactId");
    skills.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
    setBurgerStatus(false);
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
          <MenuIcon
            onClick={() => setBurgerStatus(true)}
            className="menuIcon"
          />
        </RightMenu>
      </Nav>
      <BurgerNav show={burgerStatus}>
        <Close>
          <CloseIcon onClick={() => setBurgerStatus(false)} />
        </Close>
        <List>
          <div onClick={skillsScroll}>Skills</div>
          <div onClick={projectsScroll}>Projects</div>
          <div onClick={aboutMeScroll}>About Me</div>
          <div onClick={contactScroll}>Contact</div>
        </List>
      </BurgerNav>
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
  z-index: 10;
`;

const BurgerNav = styled.div`
display:flex;
flex-direction: column;
border: black solid 1px;
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color:white;
color:black;
font-family: "Bakbak One", cursive;
font-size: 12px
z-index: 11;
width:70%;
transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
transition: transform 0.2s ease-in;
`;

const Color = keyframes`
from{
  color:white;
}
to{
  color:gray;
}`;

const Color2 = keyframes`
from{ 
  background-color:white;
}
to{ 
  background-color:LightGray;
}`;

const List = styled.div`
display:flex
align-items:flex-end;
flex-direction: column;
div{
  font-size:20px;
  padding:20px 3px;
  width:100%;
  box-sizing: border-box;
  border-bottom: 1px solid;

}

div:hover{
  cursor:pointer;
  animation: ${Color2} 1s forwards;
}`;

const Close = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  box-sizing: border-box;
  svg {
    margin: 15px;
    transform: scale(1.5);
  }
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
  align-items: center;
  opacity: 0;
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
  height: 100%;
  animation: ${Show} 2s forwards;
  img {
    height: 60px;
  }

  img:hover {
    cursor: pointer;
    animation: ${Shake} 0.5s ease;
  }
`;

const Logo = styled.div``;

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
