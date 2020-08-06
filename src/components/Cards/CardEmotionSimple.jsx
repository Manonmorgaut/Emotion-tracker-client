import React, { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";

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

export class CardEmotion extends Component {
  state = {
    image: "",
  };

  componentDidMount() {
    const whatEmotion = emotions.filter(
      (emotion) => emotion.name === this.props.emotion.emotion.name
    );
    whatEmotion.map((emotion) => this.setState({ image: emotion.img }));
  }

  render() {
    const dateToFormat = new Date(this.props.emotion.created_at);

    return (
      <div id="CardEmotion">
        <h1>
          <Moment format="DD MMM YYYY HH:mm" date={dateToFormat} />
        </h1>
        <h2>{this.props.emotion.emotion.name}</h2>
        <p><span> Intensity </span></p> 
        <p>{this.props.emotion.emotion.intensity}</p>
        <p><span> Reason </span></p> 
        <p>{this.props.emotion.emotion.emotionTrigger}</p>
      </div>
    );
  }
}

export default CardEmotion;
