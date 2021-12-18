import React from "react";
import styled, { keyframes } from "styled-components";
import NazLogo from "../images/Logo1.png";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <Wrap>
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
  height: 10vh;
  opacity: 0;
  position: sticky;
  top: 0;
  width: 100vw;
  animation: ${Show} 2s 4.5s forwards;
  max-width: 100%;
  img {
    height: 70px;
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
  color:#05142c;
}`;

const RightMenu = styled.div`
  color: white;
  display: flex;
  font-family: "Press Start 2P", cursive;
  font-size: 12px;
  margin-right: 20px;

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
