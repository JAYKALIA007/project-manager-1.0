import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {projects && //if we have projects then map on projects
        projects.map((project) => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          );
        })}
    </div>
  );
}
export default ProjectList;
