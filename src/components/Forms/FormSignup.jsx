import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import IconAvatar from "./../../components/icon/IconAvatar";

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
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          defaultValue={firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          defaultValue={lastName}
        />
        <IconAvatar profileImg={tmpProfileImg} clbk={this.handleImage} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" defaultValue={email} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          defaultValue={password}
        />
        <button>Create account</button>
      </form>
    );
  }
}

export default withRouter(FormSignup);
