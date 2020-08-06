import React, { Component } from "react";
import CardEmotionSimple from "../components/Cards/CardEmotionSimple";
import apiHandler from "./../api/apiHandler";
import { Link } from "react-router-dom";
import Footernav from "./../components/FooterNav";

export class EmotionFilter extends Component {
  state = {
    emotion: "",
    emotionsArray: [],
    allEmotions:[],
  };

  componentDidMount() {
    apiHandler
      .getAllEmotions()
      .then((apiRes) => {
        console.log(apiRes);
        this.setState({ allEmotions: apiRes });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    let value = event.target.value;
    this.setState({ emotion: value }, () => {
      console.log(
        "the state after changing the single empotion value is now >>>>>>",
        this.state
      );
      const filteredEmotions = this.state.allEmotions.filter(
        (oneEmotion) => oneEmotion.emotion.name === this.state.emotion
      );
      console.log("filteredEmotions:", filteredEmotions);
      this.setState({ emotionsArray: filteredEmotions }, () => {
        console.log(
          "the state after assigning the corresponding emotions in emotionsArray is now >>>>>>",
          this.state
        );
      });
    });
  };

  render() {
    return (
      <div id="EmotionFilter">
        <img src="/Images/Logo.png" alt="Logo" id="logo" />

        <div id="filterTitle">
          <h2>Select an emotion below</h2>
          <h2>to see all the calendar entries</h2>

          <label htmlFor="emotion"></label>
        </div>

        <select name="emotion" id="emotion" onChange={this.handleChange}>
          <option value="">Select an emotion</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Angry">Angry</option>
          <option value="Disgusted">Disgusted</option>
          <option value="Surprised">Surprised</option>
          <option value="Fearful">Fearful</option>
        </select>

        {this.state.emotionsArray.map((oneEmotion) => (
          <li key={oneEmotion._id}>
            <CardEmotionSimple emotion={oneEmotion} />
          </li>
        ))}

        <Link id="buttonLink" title="Back to calendar" to={`/calendar`}>
          <button className="button4"> Back to calendar </button>
        </Link>
        <Footernav />
      </div>
    );
  }
}

export default EmotionFilter;
