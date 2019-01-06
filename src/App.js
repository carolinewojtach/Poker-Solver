import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import PickedCards from "./components/PickedCards";
import "./App.css";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  state = {
    figures: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
    suits: ["Diamond", "Club", "Spade", "Heart"],
    cards: []
  };

  ////// DRAW 5 CARDS
  get5cards = () => {
    let indexes = [];
    let cards = [];

    for (let i = 0; i < 5; i++) {
      let isDrawed = false;

      //czy wylosowano już tę kartę
      while (!isDrawed) {
        let index = Math.floor(Math.random() * this.state.figures.length);
        let index2 = Math.floor(Math.random() * this.state.suits.length);

        let matchFound = indexes.find(e => e[0] === index && e[1] === index2);

        //czy index i index2 jest w tablicy
        if (matchFound === undefined) {
          cards.push({
            figure: this.state.figures[index],
            suit: this.state.suits[index2],
            id: [i]
          });
          indexes.push([index, index2]);
          isDrawed = true;
        }
      }
    }

    this.setState({
      cards: cards
    });
    console.log(this.state.cards);
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <Jumbotron />
        <Cards />
        <PickedCards onPick={this.get5cards} cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
