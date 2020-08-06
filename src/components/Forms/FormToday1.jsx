import React, { Component } from "react";

var moment = require("moment");

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
    var today = new Date();
    let momentToday = moment(today).format("DD MMM YYYY");
    return (
      <div id="FormToday1">
        <div id="allEmotionsTitle">
          <h1>{momentToday}</h1>
          <h2>How are you feeling today? </h2>
        </div>
        <div id="allEmotions">
          {emotions.map((emotion) => {        
            return (
              <div key={emotion.name}>
                <label htmlFor="name" className="emotionSelector">
                  <input
                    type="radio"
                    id={emotion.name}
                    name="name"
                    value={emotion.name}
                    checked={this.props.emotionName === emotion.name}
                    onChange={this.props.handleChange}
                  />
                  <img src={emotion.img} alt={emotion.name} />
                  <p>{emotion.name}</p>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FormToday1;
