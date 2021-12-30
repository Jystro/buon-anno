import React, { Component } from "react";

export default class AudioControl extends Component {
  constructor(props) {
    super(props);
    this.state = { audio: props.audioOn };
    this.handleAudio = this.handleAudio.bind(this);
  }

  handleAudio() {
    this.props.onClick(!this.state.audio);
    this.setState((prevState) => ({ audio: !prevState.audio }));
  }

  render() {
    return (
      <button
        className={
          "block w-16 h-16 rounded-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 bg-white content-center justify-center justify-items-center duration-300"
        }
        onClick={this.handleAudio}
      >
        {this.state.audio ? this.props.offIcon : this.props.onIcon}
      </button>
    );
  }
}
