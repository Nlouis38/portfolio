import React, { useState } from "react";
import data from "./data";

function ProjectList() {
  const [project, setProjects] = useState(data);
  return <div>{console.log(data)}</div>;
}

export default ProjectList;
