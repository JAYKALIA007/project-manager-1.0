import React from "react";
import { NavLink } from "react-router-dom";
function SignOut() {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/signup">SignUp</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Login</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default SignOut;
