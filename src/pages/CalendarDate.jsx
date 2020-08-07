import React, { Component } from "react";
import CardEmotion from "../components/Cards/CardEmotion";
import { Link } from "react-router-dom";
import Footernav from "./../components/FooterNav";

export class CalendarDate extends Component {
  render() {
    // console.log("!!!!!!!!>>>>>>>>>>", Boolean(this.props.location.state.emotions));
    return (
      <div id="CalendarDate">
        <Link id="buttonLink" title="Homepage" to={`/`}>
          <img src="/Images/Logo.png" alt="Logo" id="logo" />
        </Link>{" "}
        {this.props.location.state.emotions.length > 0 &&
          this.props.location.state.emotions.map((oneEmotion) => (
            <li key={oneEmotion._id}>
              <CardEmotion emotion={oneEmotion} />
            </li>
          ))}
        {this.props.location.state.emotions.length === 0 && (
          <div id="noEntry">
            <p>There is no emotion entry</p>
            <p>for this date</p>
          </div>
        )}
        <Link id="buttonLink" title="Back to calendar" to={`/calendar`}>
          <button className="button4"> Back to calendar </button>
        </Link>
        <Footernav />
      </div>
    );
  }
}

export default CalendarDate;
