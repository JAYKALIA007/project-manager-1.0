import React from "react";
import ProjectList from "../project/ProjectList";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
class DashBoard extends React.Component {
  render() {
    // console.log(this.props);
    const { projects, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    } // if the user is not loggedIn, we want to redirect them to the /signin page

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth, //using this to get the auth status.
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects", orderBy: ["createdAt", "desc"] }]) //here we are syncing to the "projects" collection from db
)(DashBoard);
