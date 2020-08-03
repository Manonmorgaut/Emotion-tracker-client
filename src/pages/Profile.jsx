import UserContext from "../components/Auth/UserContext";
import apiHandler from "../api/apiHandler";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footernav from "./../components/FooterNav"

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
      <div>
        <img src={user.profileImg} alt={user.firstName} />
        <h2>First Name : {user.firstName}</h2>
        <h2>Last Name : {user.lastName}</h2>
        <h2>Email Adress : {user.email}</h2>
        <h2>Psychologist Contact : {user.psyContact}</h2>
        <Link title="Update profile" to={`/profile/update`}>
          <button> Update profile </button>
        </Link>
        {/* <button onClick={this.deleteProfile}> Delete profile </button> */}
        <Footernav />
      </div>
    );
  }
}

export default Profile;
