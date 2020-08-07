import React, { Component } from "react";
import { Link } from "react-router-dom";


export class FormTodayThanks extends Component {
  render() {
    return (
      <div id="FormTodayThanks">
        <Link id="buttonLink" title="Homepage" to={`/`}>
          <img src="/Images/Logo.png" alt="Logo" id="logo" />
        </Link>{" "}
        <h2>Thanks for answering the questionnaire</h2>
        <h2>You can come back today and answer</h2>
        <h2> it again if your mood changes</h2>
      </div>
    );
  }
}

export default FormTodayThanks;
