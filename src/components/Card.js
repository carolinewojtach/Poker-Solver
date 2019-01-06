import React, { Component } from "react";
import diamond from "../images/diamond.png";
import club from "../images/club.png";
import spade from "../images/spade.png";
import heart from "../images/heart.png";

export default class Card extends Component {
  render() {
    const { figure, suit, id, getCard } = this.props;
    let source = " ";
    if (suit === "diamond") {
      source = diamond;
    } else if (suit === "club") {
      source = club;
    } else if (suit === "heart") {
      source = heart;
    } else if (suit === "spade") {
      source = spade;
    }

    return (
      <div className="pokerCard" onClick={() => getCard(id)}>
        <span className="txt">{figure}</span>
        <br />
        <div>
          <img className="card-icon" src={source} alt={figure} />
        </div>
      </div>
    );
  }
}
