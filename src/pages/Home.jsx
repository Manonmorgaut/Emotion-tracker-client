import React, { Component } from "react";
import UserContext from "../components/Auth/UserContext";
import Welcome from "./../components/Subcomponents/Welcome";
import SigninPage from "./../components/Subcomponents/SigninPage";

export class Home extends Component {
  static contextType = UserContext;
  render() {
    const { user } = this.context;
    return (
      <div id ="Home">
        {user && <Welcome />}

        {!user && <SigninPage />}
      </div>
    );
  }
}

export default Home;
