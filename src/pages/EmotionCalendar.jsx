import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import CardEmotion from "../components/Cards/CardEmotion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Footernav from "./../components/FooterNav";
var moment = require("moment");

export class EmotionCalendar extends Component {
  state = {
    emotions: [],
    date: new Date(),
    emotionsOfSelectedDate: [],
  };

  componentDidMount() {
    apiHandler
      .getAllEmotions()
      .then((apiRes) => {
        console.log(apiRes);
        this.setState({ emotions: apiRes });
      })
      .catch((err) => console.log(err));
  }

  onChange = (date) =>
    this.setState({ date }, () => {
      const momentStateDate = moment(this.state.date).format("DD MMM YYYY");
      const oneEmotion = this.state.emotions.filter(
        (emotion) =>
          moment(emotion.created_at).format("DD MMM YYYY") === momentStateDate
      );
      this.setState({ emotionsOfSelectedDate: oneEmotion });
    });

  onClickDay = () => {
    console.log("A new day was clicked in calendar");
  };

  render() {
    return (
      <React.Fragment>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          onClickDay={(event) => {
            this.onClickDay();
          }}
        />
        {this.state.emotionsOfSelectedDate.map((oneEmotion) => (
          <li key={oneEmotion._id}>
            <CardEmotion emotion={oneEmotion} />
          </li>
        ))}
        <Footernav />
      </React.Fragment>
    );
  }
}

export default EmotionCalendar;
