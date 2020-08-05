import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SigninPage extends Component {
  render() {
    return (
      <div id="SigninPage">

        <img src="/Images/Logo.png" alt="Logo" id="logo" />

        <Link title="Login" to={`/signin`} id ="buttonLink">
          <button class="button button1">LOGIN</button>
        </Link>

        <Link title="Signup" to={`/signup`} id ="buttonLink">
          <button class="button button2">SIGNUP</button>
        </Link>
      </div>
    );
  }
}

export default SigninPage;
