import React from "react";

const Solution = ({ pickedCards, figures }) => {
  //////MAIN FUNCTION
  function checkCards(cards, figures) {
    let figureValues = countFigures(cards); //call figure counter
    let firstCheck = checkFigures(figureValues);

    //second check- suits
    if (firstCheck === false) {
      let countSuitsArr = countSuits(cards); //call suit counter
      let secondCheck = checkSuits(figureValues, countSuitsArr);
      if (secondCheck === false) {
        let thirdCheck = getHighCard(cards, figures);
        return "Your high card is " + thirdCheck;
      } else return "Your poker hand is " + secondCheck;
    } else return "Your poker hand is " + firstCheck;
  }

  //FIGURE COUNTER
  function countFigures(cards) {
    let counts = {
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      J: 0,
      Q: 0,
      K: 0,
      A: 0
    };

    for (let i = 0; i < 5; i++) {
      let fig = cards[i].figure; //bierze kolejno figury z 5 kart
      counts[fig] = counts[fig] + 1; //zlicza ilosć każdej figury w wylosowanych kartach
    }
    //console.log(JSON.stringify(counts));

    let figureValues = Object.values(counts); //zapisuje wartości counts do arraya
    return figureValues;
  }

  //CHECK FIGURES SETS
  function checkFigures(countFiguresArr) {
    // console.log(JSON.stringify(countFiguresArr));
    //CHECK FOR 2,3 OR 4 SAME CARDS
    let pairs = 0,
      threes = 0,
      fours = 0;

    for (let i = 0; i < 13; i++) {
      if (countFiguresArr[i] === 2) {
        pairs += 1; //counts pairs
      } else if (countFiguresArr[i] === 3) {
        threes += 1; //counts threes
      } else if (countFiguresArr[i] === 4) {
        fours += 1; //counts fours
      }
    }

    if (pairs === 1 && threes === 1) {
      return "a FULL HOUSE!";
    } else if (threes === 1) {
      return "THREE OF A KIND!";
    } else if (pairs === 2) {
      return "TWO PAIR!";
    } else if (pairs === 1) {
      return "ONE PAIR!";
    } else if (fours === 1) {
      return "FOUR OD A KIND!";
    } else {
      return false; //none of the above sets
    }
  }

  //COLORS COUNTER
  function countSuits(cards) {
    let counts = {
      diamond: 0,
      club: 0,
      spade: 0,
      heart: 0
    };

    for (let i = 0; i < 5; i++) {
      let suit = cards[i].suit; //bierze kolejno kolory z 5 kart
      counts[suit] = counts[suit] + 1; //zlicza ilosć każdego koloru w wylosowanych kartach
    }
    //console.log(JSON.stringify(counts));

    let suitValues = Object.values(counts); //zapisuje wartości counts do arraya

    return { suitValues };
  }
  //CHECK SUITS SETS AND OTHERS
  function checkSuits(countFiguresArr, countSuitsArr) {
    //console.log(JSON.stringify(countFiguresArr), JSON.stringify(countSuitsArr));

    //check if all 5 cards have same suit
    let oneSuit = false;

    for (let i = 0; i < 4; i++) {
      if (
        countSuitsArr.suitValues[i] === 5 ||
        countSuitsArr.suitValues[i] === "5"
      )
        oneSuit = true;
    }

    let result = checkOrder(countFiguresArr);

    if (oneSuit === true) {
      if (result === "succeeding numbers - 10 to ace") {
        return "a ROYAL FLUSH!";
      } else if (result === "succeeding numbers") {
        return "a STRAIGHT FLUSH!";
      } else if (result === "not succeeding numbers") {
        return "a FLUSH!";
      }
    } else if (
      result === "succeeding numbers" ||
      result === "succeeding numbers - 10 to ace"
    ) {
      return "a STRAIGHT!";
    } else return false; //none of the above sets
  }

  //CHECK ORDER OF CARDS
  function checkOrder(countFiguresArr) {
    let indexes = [];
    for (let i = 0; i < 13; i++) {
      if (countFiguresArr[i] === 1 || countFiguresArr[i] === "1")
        indexes.push(i);
    }

    let counter1 = 0,
      counter2 = 0,
      counter3 = 0;

    for (let i = 0; i < 4; i++) {
      if (indexes[i] === indexes[i + 1] - 1 && indexes[4] === 12) {
        counter1 += 1;
      } else if (indexes[i] === indexes[i + 1] - 1) {
        counter2 += 1;
      } else {
        counter3 += 1;
      }
    }

    if (counter1 === 4) return "succeeding numbers - 10 to ace";
    else if (counter2 === 4) return "succeeding numbers";
    else if (counter3 > 0) return "not succeeding numbers";
  }

  // CHECK HIGH CARD
  function getHighCard(cards, figures) {
    let indexes = [];

    for (let i = 0; i < 5; i++) {
      let fig = cards[i].figure;
      let index = figures.indexOf(fig);
      indexes.push(index);
    }

    let max = Math.max(...indexes);

    let fig = cards[indexes.indexOf(max)].figure;
    if (cards[indexes.indexOf(max)].figure === "J") {
      fig = "jack";
    } else if (cards[indexes.indexOf(max)].figure === "Q") {
      fig = "queen";
    } else if (cards[indexes.indexOf(max)].figure === "K") {
      fig = "king";
    } else if (cards[indexes.indexOf(max)].figure === "A") {
      fig = "ace";
    }
    let suit = cards[indexes.indexOf(max)].suit;
    return fig + " " + suit + ".";
  }

  // const { pickedCards, figures } = this.props;

  return (
    <div className="result font-weight-bold col-12 ">
      {pickedCards.length === 5 ? (
        <p>{checkCards(pickedCards, figures)}</p>
      ) : (
        <p>Your poker hand is ...</p>
      )}
    </div>
  );
};

export default Solution;
