import React, { Component } from "react";
import TimerNumber from "./TimerNumber";

export default class Countdown extends Component {
  constructor(props) {
    super(props); // parent's constructor

    this.handleChange = this.handleChange.bind(this);
    // data in ms
    this.targetTime = this.props.date;

    this.state = { timeRemaining: this.targetTime - new Date().getTime() };
    this.tick();
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
    this.setState({ timeRemaining: this.targetTime - new Date().getTime() });
    this.handleChange(this.state.timeRemaining);
  }

  formatTime() {
    return {
      days: Math.floor(this.state.timeRemaining / 86_400_000),
      hours: Math.floor((this.state.timeRemaining % 86_400_000) / 3_600_000),
      minutes: Math.floor((this.state.timeRemaining % 3_600_000) / 60_000),
      seconds: Math.floor((this.state.timeRemaining % 60_000) / 1000)
    };
  }

  handleChange(e) {
    this.props.onExpiry(e);
  }

  render() {
    Object.assign(this, this.formatTime());
    return (
      <div>
        <TimerNumber number={this.days} />
        <div> giorni </div>
        <TimerNumber number={this.hours} />
        <div> ore </div>
        <TimerNumber number={this.minutes} />
        <div> minuti </div>
        <TimerNumber number={this.seconds} />
        <div> secondi </div>
      </div>
    );
  }
}
