import React, { Component } from "react";
import Timer from "./Timer";

export default class GreetingsControl extends Component {
  constructor(props) {
    super(props);

    this.handleExpiry = this.handleExpiry.bind(this);

    this.state = { remainingTime: Infinity };
  }

  handleExpiry(time) {
    this.setState({ remainingTime: time });
  }

  render() {
    let content;
    if (this.state.remainingTime < 0 && this.state.remainingTime > -2_678_400_000) {
      // content = <Greetings />;
    } else {
      // data fino a cui contare in ms
      let date = new Date(
        String(new Date().getFullYear() + 1) + "-01-01T00:00:00"
      ).getTime();
      content = (
        <div>
          <Timer date={date} onExpiry={this.handleExpiry} />
          <h1>AL NUOVO ANNO</h1>
        </div>
      );
    }
    return content;
  }
}
