import React, { Component } from "react";

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    //data del prossimo anno
    let nextYear = new Date().getFullYear() + 1;
    //data del 1 gennaio
    this.targetTime = new Date(0);
    this.targetTime.setFullYear(nextYear);
    this.targetTime = this.targetTime.getTime();

    this.state = { timeRemaining: this.targetTime - new Date().getTime() };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ timeRemaining: this.targetTime - new Date() });
  }

  formatTime() {
    return (
      String(Math.floor(this.state.timeRemaining / 86_400_000)) +
      " giorni " +
      String(Math.floor((this.state.timeRemaining % 86_400_000) / 3_600_000)) +
      " ore " +
      String(Math.floor((this.state.timeRemaining % 3_600_000) / 60_000)) +
      " minuti " +
      String(Math.floor((this.state.timeRemaining % 60_000) / 1000)) +
      " secondi"
    );
  }

  render() {
    return (
      <div>
        <h1>{this.formatTime()}</h1>
      </div>
    );
  }
}
