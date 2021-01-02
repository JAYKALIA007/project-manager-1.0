import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import { connect } from "react-redux";
function NavBar(props) {
  const { auth } = props;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          ProjectManager
        </Link>
        <SignIn />
        <SignOut />
      </div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(NavBar);
