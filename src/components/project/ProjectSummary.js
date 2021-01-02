import React from "react";
function ProjectSummary(props) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{props.project.title}</span>
        <p>
          Posted by : {props.project.authorFirstName}{" "}
          {props.project.authorLastName}
        </p>
        <p className="grey-text">26th Oct, 12pm</p>
      </div>
    </div>
  );
}
export default ProjectSummary;
