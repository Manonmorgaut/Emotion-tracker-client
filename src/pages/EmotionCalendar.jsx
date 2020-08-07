import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Footernav from "./../components/FooterNav";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

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
      const dayEmotions = this.state.emotions.filter(
        (emotion) =>
          moment(emotion.created_at).format("DD MMM YYYY") === momentStateDate
      );

      this.props.history.push(`/calendar/date`, { emotions: dayEmotions });
    });

  onClickDay = () => {
    console.log("A new day was clicked in calendar");
  };

  render() {
    return (
      <div id="EmotionCalendar">
        <Link id="buttonLink" title="Homepage" to={`/`}>
          <img src="/Images/Logo.png" alt="Logo" id="logo" />
        </Link>{" "}
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          onClickDay={(event) => {
            this.onClickDay();
          }}
        />
        <Link
          id="buttonLink"
          title="Filter buy emotion"
          to={`/calendar/emotionfilter`}
        >
          <button className="button4">Filter by emotion</button>
        </Link>
        <Footernav />
      </div>
    );
  }
}

export default EmotionCalendar;
