import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";
function SignIn(props) {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
        <li>
          <a onClick={props.signOut}>Logout</a>
        </li>
        <li>
          <NavLink className="btn btn-floating pink lighten-1" to="/">
            {props.profile.initials ? props.profile.initials : null}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
  };
};
export default connect(null, mapDispatchToProps)(SignIn);
