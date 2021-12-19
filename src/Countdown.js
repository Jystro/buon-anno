import React, { Component } from "react";

export default class Countdown extends Component {
  constructor(props) {
    super(props); // parent's constructor

    // data in ms
    this.targetTime = this.props.date;

    this.state = { timeRemaining: this.targetTime - new Date().getTime() };
  }

  // quando viene caricato imposta nuovo timer
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  // quando viene rimosso cancella il timer
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // questo ogni secondo
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
