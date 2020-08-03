import React, { Component } from "react";

export class FormToday2 extends Component {
  render() {
    return (
        <React.Fragment>
        <h1>How {this.props.emotionName} are you?</h1>
        <input
          type="range"
          min="1"
          max="10"
          onChange={this.props.handleChange}
          id="intensity"
        />
      </React.Fragment>
    );
  }
}

export default FormToday2;
