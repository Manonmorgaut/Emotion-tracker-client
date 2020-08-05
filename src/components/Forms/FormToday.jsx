import React, { Component } from "react";
import FormToday1 from "./FormToday1";
import FormToday2 from "./FormToday2";
import FormToday3 from "./FormToday3";
import FormTodayThanks from "./FormTodayThanks";
import { Link } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import Footernav from "./../FooterNav";

export class FormToday extends Component {
  state = {
    index: 0,

    emotion: {
      name: "",
      intensity: 10,
      emotionTrigger: "",
    },

    test: "",
  };

  handleChange = (event) => {
    console.log("this is event target value", event.target.value);
    console.log("this is event target type", event.target.type);
    var emotion = { ...this.state.emotion };

    if (event.target.type === "radio") {
      emotion[event.target.id] = event.target.name;
    } else if (
      event.target.type === "range" ||
      event.target.type === "textarea"
    ) {
      emotion[event.target.id] = event.target.value;
    }

    this.setState({ emotion }, () => {
      console.log("this is the new state", this.state);
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var emotion = { ...this.state.emotion };
    console.log("EMOTIOOOOOOOOOOOOOOOOOOOOOON", emotion);

    apiHandler
      .createOneEmotion(emotion)
      .then((apiRes) => {
        console.log("the api Res is", apiRes);
      })
      .catch((error) => console.log(error));
  };

  handleNext = (event) => {
    console.log(
      "the next button was clicked and state index is",
      this.state.index
    );
    let newIndex = this.state.index + 1;
    this.setState({ index: newIndex }, () => {
      console.log(this.state);
    });
  };

  render() {
    if (this.state.index === 0) {
      return (
        <div className="FormToday">
           <img src="/Images/Logo.png" alt="Logo" id="logo" />
          <FormToday1
            handleChange={this.handleChange}
            emotionName={this.state.emotion.name}
          />
          <button onClick={this.handleNext}> Next </button>
          <Footernav />
        </div>
      );
    } else if (this.state.index === 1) {
      return (
        <div className="FormToday">
           <img src="/Images/Logo.png" alt="Logo" id="logo" />
          <FormToday2
            handleChange={this.handleChange}
            emotionName={this.state.emotion.name}
          />
          <button onClick={this.handleNext}> Next </button>
          <Footernav />
        </div>
      );
    } else if (this.state.index === 2) {
      return (
        <div className="FormToday">
           <img src="/Images/Logo.png" alt="Logo" id="logo" />
          <FormToday3
            handleChange={this.handleChange}
            emotionName={this.state.emotion.name}
          />
          <button
            onClick={(event) => {
              this.handleNext(event);
              this.handleSubmit(event);
            }}
          >
            Submit
          </button>
          <Footernav />
        </div>
      );
    } else if (this.state.index === 3) {
      return (
        <div>
          <FormTodayThanks />
          <Link title="go to home page" to={`/`}>
            <div className="FormToday">
              <button> Back to homepage </button>
            </div>
            <Footernav />
          </Link>
        </div>
      );
    }
  }
}

export default FormToday;
