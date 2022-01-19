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

  handleAudio(audio) {
    this.setState({
      audioOn: audio
    });
  }

  render() {
    // greetings logic
    let content;
    {
      // toglinedo la variabile si inverte??
      let greet = new Date().getDate() <= 14;

      // usare state.remainingTime non funziona perché Timer non è chiamato

      //se è gennaio
      if (/*!(new Date().getMonth() > 1) || */ this.state.remainingTime < 0) {
        content = <Greetings audio={this.state.audioOn} greet={/*greet*/ true} />;
      } else {
        // data fino a cui contare in ms
        let date = new Date(
          /*String(new Date().getFullYear() + 1) + "-01-01T00:00:00"*/ "2022-01-22T11:15:00"
        );
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

    return (
      <div className="select-none font-mono">
        {content}
        <Source shadowColor="shadow-nyblue-200/60" />
        <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
          <AudioControl
            onClick={this.handleAudio}
            audioOn={this.state.audioOn}
            onIcon={
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
            }
            offIcon={
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
            }
          />
        </div>
      </div>
    );
  }
}
