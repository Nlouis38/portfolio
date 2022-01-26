import React, { useState } from "react";
import data from "./data";

function ProjectList() {
  const [project, setProjects] = useState(data);
  return (
    <div>
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
    </div>
  );
}

export default ProjectList;
