import React, { Component } from "react";
import UserContext from "../components/Auth/UserContext";
import Welcome from "./../components/Subcomponents/Welcome";
import SigninPage from "./../components/Subcomponents/SigninPage";

export class Home extends Component {
  static contextType = UserContext;
  render() {
    const { user } = this.context;
    return (
      <React.Fragment>
        {user && <Welcome />}

        {!user && <SigninPage />}
      </React.Fragment>
    );
  }
}

export default Home;
