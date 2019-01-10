import React, { Component } from "react";

export default class EmptyCard extends Component {
  render() {
    return <div id={this.props.id} className="pokerCard" />;
  }
}
