import UserContext from "../components/Auth/UserContext";
import apiHandler from "../api/apiHandler";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footernav from "./../components/FooterNav";

export class Profile extends Component {
  static contextType = UserContext;

  deleteProfile = () => {
    apiHandler
      .deleteOneUser()
      .then((dbRes) => {
        console.log("user profile was successfuly deleted", dbRes);
      })
      .catch((err) => {
        console.log("user profile couldnt be deleted", err);
      });
  };

  render() {
    const { user } = this.context;
    return (
      <div id="Profile">
        <img src="/Images/Logo.png" alt="Logo" id="logo" />

        <img id="profileImage" src={user.profileImg} alt={user.firstName} />
        <div id="profileInfo">
          <p>
            {" "}
            <span> First Name : </span> {user.firstName}
          </p>
          <p>
            <span> Last Name : </span> {user.lastName}
          </p>
          <p>
            <span>Email Adress : </span> {user.email}
          </p>
          <p>
            <span>Psychologist Contact : </span> {user.psyContact}
          </p>
        </div>
        <Link id="buttonLink" title="Update profile" to={`/profile/update`}>
          <button className="button4"> Update profile </button>
        </Link>
        {/* <button onClick={this.deleteProfile}> Delete profile </button> */}
        <Footernav />
      </div>
    );
  }
}

export default Profile;
