import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import IconAvatar from "./../../components/icon/IconAvatar";
import { Link } from "react-router-dom";

class FormSignup extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
    profileImg: "",
    tmpProfileImg: "",
  };

  handleChange = (event) => {
    const value =
      event.target.type === "file"
        ? event.target.files[0]
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData();
    fd.append("email", this.state.email);
    fd.append("profileImg", this.state.profileImg);
    fd.append("password", this.state.password);
    fd.append("firstName", this.state.firstName);
    fd.append("lastName", this.state.lastName);

    apiHandler
      .signup(fd)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleImage = (event) => {
    console.log(event.target.files[0].name);
    this.setState({
      profileImg: event.target.files[0],
      tmpProfileImg: URL.createObjectURL(event.target.files[0]),
    });
  };

  render() {
    const { email, password, firstName, lastName, tmpProfileImg } = this.state;

    return (
      <div id="FormSignup">
        <img src="/Images/Logo.png" alt="Logo" id="logo" />
        <h1>Create account</h1>
        <p>
          Already have an account?
          <Link title="Signin" to={`/signin`} id="spanLink">
            <span> Sign in</span>
          </Link>
        </p>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className="formField">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              defaultValue={firstName}
              placeholder="John"
            />
          </div>
          <div className="formField">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              defaultValue={lastName}
              placeholder="Appleseed"
            />
          </div>
          <div className="fileImportButton">
            <IconAvatar profileImg={tmpProfileImg} clbk={this.handleImage} />
          </div>
          <div className="formField">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={email}
              placeholder="john.appleseed@gmail.com"
            />
          </div>
          <div className="formField">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              defaultValue={password}
              placeholder="●●●●●●●●"
            />
          </div>
          <button className="button button3">Create account</button>
        </form>
      </div>
    );
  }
}

export default withRouter(FormSignup);
