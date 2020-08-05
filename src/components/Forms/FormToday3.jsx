import React, { Component } from "react";
var moment = require("moment");

export class FormToday3 extends Component {
  render() {
    var today = new Date();
    let momentToday = moment(today).format("DD MMM YYYY");
    return (
      <div id="FormToday3">
        <div id="whatReasonTitle">
          <h1>{momentToday}</h1>
          <h2>What made you feel {this.props.emotionName}? </h2>
        </div>
        <textarea
          type="text"
          rows="5"
          cols="33"
          id="emotionTrigger"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default FormToday3;
