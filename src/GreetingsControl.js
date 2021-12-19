import React, { Component } from "react";
import Countdown from "./Countdown";

export default class GreetingsControl extends Component {
  constructor(props) {
    super(props);

    this.state = { expired: false };
  }

  render() {
    let content;
    if (this.state.expired) {
      // content = <Greetings />;
    } else {
      // data fino a cui contare in ms
      let date = new Date(
        String(new Date().getFullYear() + 1) + "-01-01T00:00:00"
      ).getTime();
      content = <Countdown date={date} />;
    }
    return content;
  }
}
