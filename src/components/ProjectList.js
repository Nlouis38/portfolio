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
      <Title data-aos="fade-right" className="title">
        PROJECTS
      </Title>
      <BtnContainer data-aos="zoom-in" data-aos-duration="2000">
        {allCategories.map((category, index) => {
          return (
            <button key={index} onClick={() => filterProjects(category)}>
              {category}
            </button>
          );
        })}
      </BtnContainer>
      <Projects data-aos="zoom-out" data-aos-duration="2000">
        {projects.map((project) => {
          const { id, title, demo, source, img, category } = project;
          return (
            <div className="projects" key={id}>
              <h1>{title}</h1>
              <img className="image" src={img} alt={title} />
              <div className="btn-container">
                <a href={source} target="_blank">
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
const Title = styled.div`
  font-family: "Press Start 2P", cursive;
  font-size: 24px;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px [col-start]);
  @media (max-width: 770px) {
    display: grid;
    grid-template-columns: repeat(1, 300px [col-start]);
  }
  .projects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    .image {
      width: 250px;
      height: 150px;
    }
    .demo,
    .source {
      font-family: "Press Start 2P", cursive;
      padding: 10px;
      margin: 5px;
      max-width: 100px;
    }
    .demo:hover,
    .source:hover {
      cursor: pointer;
      background-color: gray;
      color: white;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  button {
    margin: 0px 2.5px;
    border-radius: 20px;
    font-size: 14px;
    padding: 5px 20px;
    font-family: "Press Start 2P", cursive;
  }
  @media (max-width: 770px) {
    display: grid;
    grid-template-columns: repeat(1, 300px [col-start]);
  }
  button:hover {
    cursor: pointer;
    background-color: gray;
    color: white;
  }
`;
