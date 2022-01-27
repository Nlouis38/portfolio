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

console.log(allCategories);
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
    <Container>
      <BtnContainer>
        {allCategories.map((category, index) => {
          return (
            <button key={index} onClick={() => filterProjects(category)}>
              {category}
            </button>
          );
        })}
      </BtnContainer>
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
    </Container>
  );
}

export default ProjectList;

const Container = styled.div`
  color: white;
`;

const BtnContainer = styled.div``;
