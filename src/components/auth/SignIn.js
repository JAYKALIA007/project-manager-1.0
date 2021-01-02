import React, { Component } from "react";
import { signIn } from "../../store/actions/authActions";
import { connect } from "react-redux";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.signIn(this.state); //this we get from the mapDispatchToProps
  };

  render() {
    const { authError } = this.props; //destructuring
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    authError: state.auth.authError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => {
      dispatch(signIn(credentials)); //we attach the signIn method to our props, which dipatch an action creator, which we imported at the top.
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
