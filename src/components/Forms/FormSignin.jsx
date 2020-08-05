import React, { Component } from "react";

import UserContext from "../Auth/UserContext";
import { withRouter } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import { Link } from "react-router-dom";

class FormSignin extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;

    // You can test more if you have to handle different sorts of inputs.
    const value =
      event.target.type === "file"
        ? event.target.files[0]
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    return (
      <div id="FormSignin">
        <img src="/Images/Logo.png" alt="Logo" id="logo" />
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className="formField">
            <label htmlFor="email">Email adress</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john.appleseed@gmail.com"
            />
          </div>
          <div className="formField">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="●●●●●●●●"
            />
          </div>
          <button className="button button3">Log in</button>
        </form>
        <p>
          Don't have an account yet?
          <Link title="Signup" to={`/signup`} id="spanLink">
            <span> Sign up</span>
          </Link>
        </p>
      </div>
    );
  }
}

export default withRouter(FormSignin);
