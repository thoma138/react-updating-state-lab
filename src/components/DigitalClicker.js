import React, { Component } from "react";

export default class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
    };
  }
  handleclick = () => {
    let newCount = this.state.timesClicked + 1;
    this.setState({
      timesClicked: newCount,
    });
  };

  render() {
    return (
      <button onClick={this.handleclick}>{this.state.timesClicked}</button>
    );
  }
}
