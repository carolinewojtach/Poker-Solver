import React, { Component } from "react";

export default class Solution extends Component {
  state = { result: "" };

  render() {
    const { pickedCards, figures } = this.props;
    if (this.props.pickedCards.length === 5) {
      return (
        <div className="result font-weight-bold col-12 ">
          <p>Your poker hand is {this.state.result}</p>
        </div>
      );
    } else
      return (
        <div className="result font-weight-bold col-12 ">
          <p>Your poker hand is ...</p>
        </div>
      );
  }
}
