import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import { connect } from "react-redux";
function NavBar(props) {
  const { auth, profile } = props;
  const authIsValid = auth.uid; //if logged in we get a valid uid, if logged out the uid is null
  const displayLink = authIsValid ? <SignIn profile={profile} /> : <SignOut />; //a ternary operator to display tthe content acordingly
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          ProjectManager
        </Link>
        {auth.isLoaded && displayLink}
      </div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth, //match the state to props to get the auth status
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(NavBar);
