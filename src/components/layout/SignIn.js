import React from "react";
import { NavLink } from "react-router-dom";
function SignIn() {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
        <li>
          <NavLink to="/">Logout</NavLink>
        </li>
        <li>
          <NavLink className="btn btn-floating pink lighten-1" to="/">
            JP
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default SignIn;
