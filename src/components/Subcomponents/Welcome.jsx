import React, { Component } from "react";
import UserContext from "./../../components/Auth/UserContext";
import { Link } from "react-router-dom";
import Footernav from "./../../components/FooterNav";

export class Welcome extends Component {
  static contextType = UserContext;
  render() {
    const { user } = this.context;
    return (
      <div id="Welcome">
        <img src="/Images/Logo.png" alt="Logo" id="logo" />

        <div id="WelcomeSubDiv">
          <img
            id="welcomeProfileImg"
            src={user.profileImg}
            alt={user.firstName}
          />
          <h1>
            {" "}
            Hi <span id="firstNameSpan">{user.firstName} </span>!{" "}
          </h1>
          <div>
            <p>How are you feeling </p>
            <p>today?</p>
          </div>
          <Link title="Today" to={`/today`} id="Link">
            <button id ="bigRoundButton"> Tell us here </button>
          </Link>
        </div>
        <Footernav />
      </div>
    );
  }
}

export default Welcome;
