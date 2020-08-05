import React, { Component } from "react";
var moment = require("moment");

export class FormToday2 extends Component {
  render() {
    var today = new Date();
    let momentToday = moment(today).format("DD MMM YYYY");
    return (
      <div id="FormToday2">
        <div id="howMuchTitle">
          <h1>{momentToday}</h1>
          <h2>How {this.props.emotionName} are you?</h2>
        </div>

        <input
          type="range"
          min="1"
          max="10"
          onChange={this.props.handleChange}
          id="intensity"
        />
      </div>
    );
  }
}

export default FormToday2;
