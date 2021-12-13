import React from "react";
import BaseForm from "../images/BaseForm.png";
import styled from "styled-components";

function Loading() {
  return (
    <Container>
      <LoadBar>
        <NazGoku>
          <img src={BaseForm} />
        </NazGoku>
      </LoadBar>
    </Container>
  );
}

export default Loading;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const NazGoku = styled.div``;

const LoadBar = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: gray;
  justify-content: center;
  align-items: center;
`;
