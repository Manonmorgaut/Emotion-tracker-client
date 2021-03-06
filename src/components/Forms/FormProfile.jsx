import React, { Component } from "react";
import UserContext from "../Auth/UserContext";
import apiHandler from "./../../api/apiHandler";
import Footernav from "./../../components/FooterNav";
import { Link } from "react-router-dom";


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
        console.log("this is apires", apiRes);
        this.context.setUser(apiRes);
        this.props.history.push("/profile");
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { user } = this.context;

    return (
      <div id="FormProfile">
                <Link 
          id="buttonLink"
          title="Homepage"
          to={`/`}
        >
           <img src="/Images/Logo.png" alt="Logo" id="logo" />

        </Link>
        <form
          onChange={this.handleChange}
          onSubmit={(event) => {
            this.handleSubmit(event, user._id);
          }}
        >
          <div className="formField">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              defaultValue={user.firstName}
              placeholder={user.firstName}
            />
          </div>
          <div className="formField">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              defaultValue={user.lastName}
              placeholder={user.lastName}
            />
          </div>
          <div className="formField">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={user.email}
              placeholder={user.email}
            />
          </div>
          <div className="formField">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              defaultValue={user.password}
              placeholder={user.password}
            />
          </div>
          <div className="formField">
            <label htmlFor="psyContact">Psychologist Contact </label>
            <input
              type="email"
              name="psyContact"
              id="psyContact"
              defaultValue={user.psyContact}
              placeholder={user.psyContact}
            />
          </div>

          <button className="button4">Save</button>
        </form>
        <Footernav />
      </div>
    );
  }
}

export default FormProfile;
