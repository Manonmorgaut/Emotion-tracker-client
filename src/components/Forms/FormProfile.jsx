import React, { Component } from "react";
import UserContext from "../Auth/UserContext";
import apiHandler from "./../../api/apiHandler";
import Footernav from "./../../components/FooterNav"

export class FormProfile extends Component {
  static contextType = UserContext;

  state = {};

  handleChange = (event) => {
    const key = event.target.name;
    const value =
      event.target.type === "file"
        ? event.target.files[0]
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event, userId) => {
    event.preventDefault();
    apiHandler
      .updateOneUser(userId, this.state)
      .then((apiRes) => {
        console.log(apiRes);
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { user } = this.context;

    return (
      <div>
        <form
          onChange={this.handleChange}
          onSubmit={(event) => {
            this.handleSubmit(event, user._id);
          }}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            defaultValue={user.firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            defaultValue={user.lastName}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={user.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            defaultValue={user.password}
          />
          <label htmlFor="psyContact">Psychologist Contact </label>
          <input
            type="email"
            name="psyContact"
            id="psyContact"
            defaultValue={user.psyContact}
          />

          <button>Save</button>
        </form>
        <Footernav />
      </div>
    );
  }
}

export default FormProfile;
