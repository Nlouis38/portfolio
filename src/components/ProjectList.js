import React, { useState } from "react";
import data from "./data";
import styled from "styled-components";

const allCategories = [
  "All",
  ...new Set(
    data.map((project) => {
      return project.category;
    })
  ),
];

function ProjectList() {
  const [projects, setProjects] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterProjects = (category) => {
    console.log(category);
    if (category === "All") {
      setProjects(data);
    } else {
      const newProjectList = data.filter(
        (project) => project.category === category
      );
      setProjects(newProjectList);
      console.log(newProjectList);
    }
  };

  return (
    <Container id="projectsId">
      <BtnContainer>
        {allCategories.map((category, index) => {
          return (
            <button key={index} onClick={() => filterProjects(category)}>
              {category}
            </button>
          );
        })}
      </BtnContainer>
      <Projects>
        {projects.map((project) => {
          const { id, title, demo, source, img, category } = project;
          return (
            <div className="projects" key={id}>
              <h1>{title}</h1>
              <img src={img} alt={title} />
              <div className="btn-container">
                <a href={demo}>
                  <button className="demo">Demo</button>
                </a>
                <a href={source}>
                  <button className="source">Source</button>
                </a>
              </div>
            </div>
          );
        })}
      </Projects>
    </Container>
  );
}

export default ProjectList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Bakbak One", cursive;
  font-size: 14px;
`;

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px [col-start]);
  .projects {
    margin: 20px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  button {
    margin: 0px 5px;
    border-radius: 20px;
    font-size: 14px;
    padding: 5px 20px;
    font-family: "Press Start 2P", cursive;
  }
`;
