import React from "react";
import Card from "./Card";
import EmptyCard from "./EmptyCard";
import Repeat from "react-repeat-component";

const PickedCards = props => {
  const { pickedCards } = props;
  const numberOfPicked = pickedCards.length;
  const numberOfEmpty = 5 - pickedCards.length;

  return (
    <div className="picked-cards col-sm-12 col-md-6">
      <div className="flexAndCenter">
        <Repeat times={numberOfPicked} className="flexAndCenter">
          {i => (
            <Card
              key={pickedCards[i].id}
              id={pickedCards[i].id}
              figure={pickedCards[i].figure}
              suit={pickedCards[i].suit}
            />
          )}
        </Repeat>
        <Repeat times={numberOfEmpty} className="flexAndCenter">
          {i => <EmptyCard key={i + 100} id={i + 100} />}
        </Repeat>
      </div>
    </div>
  );
};

export default PickedCards;
