import React, { Component } from "react";
import TimerNumber from "./TimerNumber";
import sound from "./sounds/clock.mp3";

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

  playAudio() {
    const audio = new Audio(sound);
    audio.play();
  }

  // questo ogni secondo
  tick() {
    this.setState({ timeRemaining: this.targetTime - new Date().getTime() });
    this.handleChange(this.state.timeRemaining);
    if (this.props.audio) {
      this.playAudio();
    }
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
      <div className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] 2xl:text-[12.5rem] text-center flex w-full items-center justify-center">
        <TimerNumber number={this.days} />
        <div className="text-white font-mono">:</div>
        <TimerNumber number={this.hours} />
        <div className="text-white font-mono">:</div>
        <TimerNumber number={this.minutes} />
        <div className="text-white font-mono">:</div>
        <TimerNumber number={this.seconds} />
      </div>
    );
  }
}
