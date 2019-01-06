import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import PickedCards from "./components/PickedCards";
import "./App.css";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  state = {
    figures: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
    suits: ["diamond", "club", "heart", "spade"],
    cards: [],
    pickedCards: [],
    clicks: 1
  };

  ////// DRAW 5 CARDS
  get5cards = () => {
    let indexes = [];
    let pickedCards = this.state.pickedCards;
    let newCards = [...this.state.cards];

    for (let i = 0; i < 5; i++) {
      let isDrawed = false;

      //czy wylosowano już tę kartę
      while (!isDrawed) {
        let index = Math.floor(Math.random() * this.state.cards.length) - 1;

        // let index = Math.floor(Math.random() * this.state.figures.length);
        // let index2 = Math.floor(Math.random() * this.state.suits.length);

        let matchFound = indexes.find(e => e[0] === index);
        // let matchFound = indexes.find(e => e[0] === index && e[1] === index2);

        //czy index i index2 jest w tablicy
        if (matchFound === undefined) {
          let pickedCard = this.state.cards.find(c => c.id === index);
          pickedCards.push(pickedCard);

          newCards = newCards.filter(c => c.id !== index);
          console.log(newCards);

          indexes.push(index);
          // indexes.push([index, index2]);
          isDrawed = true;
        }
      }
    }

    this.setState({
      cards: newCards,
      pickedCards
    });
  };

  componentWillMount() {
    let newCards = [];
    for (let i = 0; i < 52; i++) {
      if (i < 13) {
        newCards.push({
          id: i,
          figure: this.state.figures[i],
          suit: this.state.suits[0]
        });
      } else if (i >= 13 && i < 26) {
        newCards.push({
          id: i,
          figure: this.state.figures[i - 13],
          suit: this.state.suits[1]
        });
      } else if (i >= 26 && i < 39) {
        newCards.push({
          id: i,
          figure: this.state.figures[i - 26],
          suit: this.state.suits[2]
        });
      } else {
        newCards.push({
          id: i,
          figure: this.state.figures[i - 39],
          suit: this.state.suits[3]
        });
      }
    }

    this.setState({
      cards: newCards
    });
    console.log(this.state.cards);
  }

  getCard = id => {
    console.log("card picked " + id);

    const cards = this.state.cards.filter(c => c.id !== id);
    const pickedCard = this.state.cards.find(c => c.id === id);

    let pickedCards = this.state.pickedCards;
    pickedCards.push(pickedCard);

    if (this.state.pickedCards.length < 6) {
      this.setState({
        cards,
        pickedCards
      });
    }
  };

  handleReset = () => {
    let pickedCards = this.state.pickedCards;
    let cards = this.state.cards;
    pickedCards.forEach(e => cards.push(e));
    pickedCards = [];

    cards.sort(function(a, b) {
      return a.id - b.id;
    });

    console.log("reset");
    console.log(cards);

    this.setState({
      cards,
      pickedCards
    });
  };

  render() {
    const { cards, pickedCards } = this.state;
    return (
      <div className="container">
        <Navbar />
        <Jumbotron />

        <PickedCards
          onPick={this.get5cards}
          onReset={this.handleReset}
          pickedCards={pickedCards}
        />
        <Cards cards={cards} getCard={this.getCard} />
      </div>
    );
  }
}

export default App;
