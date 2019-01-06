import React from "react";
import Card from "./Card";

const PickedCards = ({ onPick, pickedCards, onReset }) => {
  return (
    <div>
      <div className="buttons">
        <button
          onClick={onPick}
          type="button"
          className="my-btn btn btn-secondary"
        >
          Draw cards
        </button>

        <button
          onClick={onReset}
          type="button"
          className="my-btn btn btn-secondary "
        >
          Reset cards
        </button>
      </div>

      <div className="cards">
        {pickedCards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            figure={card.figure}
            suit={card.suit}
          />
        ))}
      </div>
    </div>
  );
};
export default PickedCards;
