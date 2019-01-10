import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
  render() {
    return (
      <div className="cards cards-all">
        {this.props.cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            figure={card.figure}
            suit={card.suit}
            getCard={this.props.getCard}
          />
        ))}
      </div>
    );
  }
}
export default Cards;
