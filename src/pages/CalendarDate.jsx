import React, { Component } from "react";
import CardEmotion from "../components/Cards/CardEmotion";

export class CalendarDate extends Component {
  render() {
    return (
      <div id="CalendarDate">
        <img src="/Images/Logo.png" alt="Logo" id="logo" />
        {this.props.location.state.emotions.map((oneEmotion) => (
          <li key={oneEmotion._id}>
            <CardEmotion emotion={oneEmotion} />
          </li>
        ))}
      </div>
    );
  }
}

export default CalendarDate;
