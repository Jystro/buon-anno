import React, { Component } from "react";
import Timer from "./Timer";
import Greetings from "./Greetings";
import Source from "./Source.js";
import AudioControl from "./AudioControl";

export default class GreetingsControl extends Component {
  constructor(props) {
    super(props);

    this.handleExpiry = this.handleExpiry.bind(this);
    this.handleAudio = this.handleAudio.bind(this);

    this.state = { remainingTime: Infinity, audioOn: false };
  }

  handleExpiry(time) {
    this.setState({ remainingTime: time });
  }

  handleAudio() {
    this.setState((prevState) => ({
      audioOn: !prevState.audioOn
    }));
  }

  render() {
    // greetings logic
    let content;
    {
      // fino a 2 settimane dopo
      if (this.state.remainingTime < 0 && this.state.remainingTime > -1_209_600_00) {
        content = (
          <Greetings
            audio={this.state.audioOn}
            greet={this.state.remainingTime > -259_200_00}
          />
        );
      } else {
        // data fino a cui contare in ms
        let date = new Date(String(new Date().getFullYear() + 1) + "-01-01T00:00:00");
        content = (
          <div className="min-w-screen min-h-screen bg-gradient-to-t from-nyblue-100 to-slate-900 flex items-center justify-center px-5 py-5 cursor-default">
            <div className="text-nyyellow-400">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-[7rem] text-center mb-12 antialiased font-semibold">
                Quanto manca al {date.getFullYear()}?
              </h1>
              <Timer
                date={date.getTime()}
                onExpiry={this.handleExpiry}
                audio={this.state.audioOn}
              />
            </div>
          </div>
        );
      }
    }

    // icon logic
    let icon;
    {
      if (this.state.audioOn) {
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 stroke-nyblue-100 hover:stroke-nyblue-200 transition-colors duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              clipRule="evenodd"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
            />
          </svg>
        );
      } else {
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 stroke-nyblue-100 hover:stroke-nyblue-200 transition-colors duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        );
      }
    }

    return (
      <div className="select-none font-mono">
        {content}
        <Source shadowColor="shadow-nyblue-200/60" />
        <AudioControl>
          <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
            <button
              className={
                "block w-16 h-16 rounded-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 bg-white content-center justify-center justify-items-center duration-300"
              }
              onClick={this.handleAudio}
            >
              {icon}
            </button>
          </div>
        </AudioControl>
      </div>
    );
  }
}
