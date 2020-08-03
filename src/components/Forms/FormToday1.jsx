import React, { Component } from "react";

const emotions = [
  {
    name: "Happy",
    img: "/Images/happy.png",
  },
  {
    name: "Sad",
    img: "/Images/sad.png",
  },
  {
    name: "Fearful",
    img: "/Images/fearful.png",
  },
  {
    name: "Disgusted",
    img: "/Images/disgusted.png",
  },
  {
    name: "Angry",
    img: "/Images/angry.png",
  },
  {
    name: "Surprised",
    img: "/Images/surprised.png",
  },
];

export class FormToday1 extends Component {
  render() {
    return (
      <div>
      <h1>How are you feeling today? </h1>
        {emotions.map((emotion) => {
          return (
            <React.Fragment key={emotion.name}>
              <input
                type="radio"
                id="name"
                name={emotion.name}
                checked={this.props.emotionName === emotion.name}
                onChange={this.props.handleChange}
              />
              <label htmlFor="name">{emotion.name}</label>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default FormToday1;
