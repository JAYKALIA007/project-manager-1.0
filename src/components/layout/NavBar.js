import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
function NavBar(props) {
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
export default NavBar;
