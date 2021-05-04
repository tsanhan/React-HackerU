import React, { Component } from "react";

import Card from "./card";
import CardRaiseEvent from "./cardRaiseEvent";
import FavsTotal from "./favsTotal";
import { getCards } from "../services/cards";
class Cards extends Component {
  state = {
    cards: [
      // { id: 1, title: "Card 1", article: "Text demo 1" },
      // { id: 2, title: "Card 2", article: "Text demo 2" },
      // { id: 3, title: "Card 3", article: "Text demo 3" },
    ],
    favs: new Set(), // raising events
  };

  constructor() {
    super();
    console.log("Cards constructor hook invoke!");
  }

  // raising events
  onHandleFavs = (cardId) => {
    let { favs } = this.state;
    // if array:  favs.splice(favs.indexOf(cardId), 1);

    if (favs.has(cardId)) {
      favs.delete(cardId);
    } else {
      // if array: favs.push(cardId);
      favs.add(cardId);
    }

    this.setState({ favs });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "Cards componentDidUpdate hook invoke! prevProps:",
      prevProps,
      "prevState:",
      prevState
    );
  }

  // to load data to populate the state
  componentDidMount() {
    // const cards = [
    //   { id: 1, title: "Card 1", article: "Text demo 1" },
    //   { id: 2, title: "Card 2", article: "Text demo 2" },
    //   { id: 3, title: "Card 3", article: "Text demo 3" }
    // ];
    // this.setState({ cards });

    this.setState({ cards: getCards() });
  }
  render() {
    console.log("Cards render hook invoke!");
    const { favs } = this.state;

    return (
      <React.Fragment>
        {/* composing */}
        {/* <div className="container">
          <div className="row">
            <Card />
          </div>
        </div> */}
        <div className="container">
          <div className="row">
                      
            <div className="col-12">
                          <p>Total cards in your bookmark: {favs.length}</p>
                        
            </div>
                    
          </div>
          <div className="row">
            {/* props */}
            {this.state.cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
            {/* children */}
            {this.state.cards.map((card) => (
              <Card key={card.id} card={card}>
                <span>Card #{card.id}</span>
              </Card>
            ))}
          </div>
          <div className="row">
            <FavsTotal favs={favs} />
            {this.state.cards.map((card) => (
              <CardRaiseEvent
                onHandleFavs={() => this.onHandleFavs(card.id)}
                key={card.id}
                card={card}
                favs={favs}
              >
                <span>Card #{card.id}</span>
              </CardRaiseEvent>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;
