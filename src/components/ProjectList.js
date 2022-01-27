import React, { useState } from "react";
import data from "./data";
import styled from "styled-components";

function ProjectList() {
  const [project, setProjects] = useState(data);
  return (
    <Container>
      {data.map((project) => {
        const { id, title, demo, source, img, category } = project;
        console.log(title);
        return (
          <div className="projects" key={id}>
            <h1>{title}</h1>
            <img src={img} alt={title} />
            <div className="btn-container">
              <button className="demo">Demo</button>
              <button className="source">Source</button>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default ProjectList;

const Container = styled.div`
  color: white;
`;

const BtnContainer = styled.div``;
