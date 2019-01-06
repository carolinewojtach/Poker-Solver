import React from "react";

const PickedCards = props => {
  const { onPick, cards } = props;
  const cardList = cards.map(card => {
    return (
      <div key={card.id}>
        Card: {card.figure} {card.suit}
      </div>
    );
  });
  return (
    <div className="pickedCards">
      <div className="buttons">
        <button
          onClick={onPick}
          type="button"
          className="my-btn btn btn-secondary"
        >
          Draw cards
        </button>
        <button type="button" className="my-btn btn btn-secondary ">
          Reset cards
        </button>
        <div>{cardList}</div>
      </div>
    </div>
  );
};
export default PickedCards;
