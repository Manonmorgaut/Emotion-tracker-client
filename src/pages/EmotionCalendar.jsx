import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import CardEmotion from "../components/Cards/CardEmotion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Footernav from "./../components/FooterNav";
import { Redirect } from "react-router-dom";

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
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState !== this.state) {
  //     <Redirect
  //       to="/calendar/date"
  //       emotions={this.state.emotionsOfSelectedDate}
  //     />
  //   }
  // };

  onChange = (date) =>
    this.setState({ date }, () => {
      const momentStateDate = moment(this.state.date).format("DD MMM YYYY");
      const dayEmotions = this.state.emotions.filter(
        (emotion) =>
          moment(emotion.created_at).format("DD MMM YYYY") === momentStateDate
      );
      //this.setState(
        //{ emotionsOfSelectedDate: oneEmotion }
        //   () => {
        //   <Redirect
        //     to="/calendar/date"
        //     emotions={this.state.emotionsOfSelectedDate}
        //   />;
        // }
      //);
        this.props.history.push(`/calendar/date`, {emotions:dayEmotions})
    });

  onClickDay = () => {
    console.log("A new day was clicked in calendar");
  };

  render() {
    return (
      <div id="EmotionCalendar">
      <img src="/Images/Logo.png" alt="Logo" id="logo" />
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          onClickDay={(event) => {
            this.onClickDay();
          }}
        />
        {/* {this.state.emotionsOfSelectedDate.map((oneEmotion) => (
          <li key={oneEmotion._id}>
            <CardEmotion emotion={oneEmotion} />
          </li>
        ))} */}
        <Footernav />
      </div>
    );
  }
}

export default EmotionCalendar;
