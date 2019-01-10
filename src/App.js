import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import PickedCards from "./components/PickedCards";
import Footer from "./components/Footer";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Buttons from "./components/Buttons";

class App extends Component {
  state = {
    figures: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
    suits: ["diamond", "club", "heart", "spade"],
    cards: [],
    pickedCards: [],
    result: "Your poker hand - Straight"
  };

  ////// DRAW 5 CARDS
  draw5cards = () => {
    let pickedCards = this.state.pickedCards;
    let cards = this.state.cards;

    if (pickedCards.length !== 0) {
      pickedCards.forEach(e => cards.push(e));
      pickedCards = [];

      cards.sort(function(a, b) {
        return a.id - b.id;
      });
    }

    let indexes = [];
    for (let i = 0; i < 5; i++) {
      let isDrawed = false;

      //czy wylosowano już tę kartę
      while (!isDrawed) {
        let index = Math.floor(Math.random() * cards.length);
        console.log(index);
        let matchFound = indexes.find(e => {
          return e === index;
        });

        if (matchFound === undefined) {
          let pickedCard = this.state.cards.find(c => c.id === index);
          pickedCards.push(pickedCard);

          cards = cards.filter(c => c.id !== index);

          indexes.push(index);
          isDrawed = true;
          console.log("wylosowano karte" + i);
        }
      }
    }

    this.setState({
      cards,
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
    if (this.state.pickedCards.length < 5) {
      console.log("card picked " + id);

      const cards = this.state.cards.filter(c => c.id !== id);
      const pickedCard = this.state.cards.find(c => c.id === id);

      let pickedCards = this.state.pickedCards;
      pickedCards.push(pickedCard);
      this.setState({
        cards,
        pickedCards
      });
    }
  };

  handleReset = () => {
    let pickedCards = this.state.pickedCards;
    let cards = this.state.cards;

    console.log("reset");
    pickedCards.forEach(e => cards.push(e));
    pickedCards = [];

    cards.sort(function(a, b) {
      return a.id - b.id;
    });

    this.setState({
      cards,
      pickedCards
    });
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="page">
        <div className="container">
          <div className="push" />
          <Navbar />
          <Jumbotron />
          <div className="row">
            <Buttons
              result={this.state.result}
              onDraw={this.draw5cards}
              onReset={this.handleReset}
            />
            <PickedCards pickedCards={this.state.pickedCards} />
          </div>
          <Cards cards={cards} getCard={this.getCard} />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
