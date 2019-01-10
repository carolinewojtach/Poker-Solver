import React from "react";
import Card from "./Card";
import EmptyCard from "./EmptyCard";
import Repeat from "react-repeat-component";

const PickedCards = props => {
  const { onDraw, pickedCards, onReset } = props;

  const list = pickedCards.map(card => {
    return (
      <Card key={card.id} id={card.id} figure={card.figure} suit={card.suit} />
    );
  });

  const numberOfEmpty = 5 - pickedCards.length;

  return (
    <div>
      <div className="buttons">
        <button
          onClick={onDraw}
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
        {list}
        <Repeat times={numberOfEmpty} className="empty-cards">
          {i => <EmptyCard key={i + 100} id={i + 100} />}
        </Repeat>
      </div>
    </div>
  );
};

export default PickedCards;
