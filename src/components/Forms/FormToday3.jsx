import React, { Component } from "react";

export class FormToday3 extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>What made you feel {this.props.emotionName}? </h1>
        <textarea
          type="text"
          rows="5" 
          cols="33"
          id="emotionTrigger"
          onChange={this.props.handleChange}
        />
      </React.Fragment>
    );
  }
}

export default FormToday3;
