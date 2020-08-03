import React, { Component } from "react";
import UserContext from "./../../components/Auth/UserContext";
import { Link } from "react-router-dom";
import Footernav from "./../../components/FooterNav";

export class Welcome extends Component {
  static contextType = UserContext;
  render() {
    const { user } = this.context;
    return (
      <div>
        <h1> Hi {user.firstName}! </h1>
        <img src={user.profileImg} alt={user.firstName} />
        <Link title="go to create form" to={`/today`}>
          <button> This button should take you to your survey </button>
        </Link>
        <Footernav />
      </div>
    );
  }
}

export default Welcome;
