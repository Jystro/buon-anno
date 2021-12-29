import React, { Component } from "react";
import Timer from "./Timer";
import Greetings from "./Greetings";

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
    // fino a 2 settimane dopo
    if (this.state.remainingTime < 0 && this.state.remainingTime > -120_960_000) {
      content = <h1>Buon anno</h1>;
    } else {
      // data fino a cui contare in ms
      let date = new Date(String(new Date().getFullYear() + 1) + "-01-01T00:00:00");
      content = (
        <div className="min-w-screen min-h-screen bg-yellow-500 flex items-center justify-center px-5 py-5">
          <div className="text-yellow-100">
            <h1 className="text-5xl text-center mb-4 font-extralight">
              Quanto manca al {date.getFullYear()}?
            </h1>
            <Timer date={date.getTime()} onExpiry={this.handleExpiry} />
          </div>
        </div>
      );
    }
    return content;
  }
}
