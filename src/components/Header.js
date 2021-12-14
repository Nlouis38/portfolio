import React from "react";
import styled, { keyframes } from "styled-components";

function Header() {
  return (
    <div>
      <Nav>
        <Logo>Nazir Louis</Logo>
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
`;

const Logo = styled.div`
  margin-left: 20px;
  font-family: "Herr Von Muellerhoff", cursive;
  font-size: 24px;
`;

const RightMenu = styled.div`
  color: black;
  display: flex;
  div {
    padding: 0px 20px;
  }

  div:hover {
    cursor: pointer;
  }
`;
