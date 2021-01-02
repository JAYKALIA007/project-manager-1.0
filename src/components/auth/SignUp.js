import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <input
              type="email"
              placeholder="E-mail"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Last Name "
              id="lastName"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
