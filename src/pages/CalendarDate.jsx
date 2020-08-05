import React, { Component } from "react";

export class CalendarDate extends Component {
  render() {
    return (
      <div>
        {this.props.emotions.map((oneEmotion) => (
          <li key={oneEmotion._id}>
            <CardEmotion emotion={oneEmotion} />
          </li>
        ))}
      </div>
    );
  }
}

export default CalendarDate;
