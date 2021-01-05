import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
const ProjectDetails = (props) => {
  // const id = props.match.params.id;
  const { project, auth } = props; //destructuring to get the projects
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project title - {project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>
              {moment(props.project.createdAt.toDate()).format("MMM Do YYYY")}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              <span> Loading... </span>
            </span>
          </div>
        </div>
      </div>
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  const id = ownProps.match.params.id; //we use ownProps, b'coz the props are not available outside the component function.
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
