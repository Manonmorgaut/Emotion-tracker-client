import UserContext from "../components/Auth/UserContext";
import apiHandler from "../api/apiHandler";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footernav from "./../components/FooterNav";

export class Profile extends Component {
  static contextType = UserContext;


   handleLogout = () => {
    apiHandler
      .logout()
      .then(() => {
        this.context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { user } = this.context;
    return (
      <div id="Profile">
        <img src="/Images/Logo.png" alt="Logo" id="logo" />

        <img id="profileImage" src={user.profileImg} alt={user.firstName} />
        <div id="profileInfo">
          <h2> First Name </h2>

          <p>{user.firstName}</p>

          <h2> Last Name </h2>

          <p>{user.lastName}</p>

          <h2>Email Adress </h2>

          <p>{user.email}</p>

          <h2>Psychologist Contact</h2>

          <p>{user.psyContact}</p>
        </div>
        <Link id="buttonLink" title="Update profile" to={`/profile/update`}>
          <button className="button4"> Update profile </button>
        </Link>
        <button className="button5" onClick={this.handleLogout}>Logout</button>
        {/* <button onClick={this.deleteProfile}> Delete profile </button> */}
        <Footernav />
      </div>
    );
  }
}

export default Profile;
