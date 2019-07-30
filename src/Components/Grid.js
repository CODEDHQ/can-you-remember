import React, { useState, useEffect } from "react";
import Card from "./Card";
import cards from "../data";

const shuffle = list => {
  var j, x, i;
  for (i = list.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = list[i];
    list[i] = list[j];
    list[j] = x;
  }
  return list;
};

const Grid = () => {
  var usedCards = [];
  const [flippedCards, changeFlipped] = useState([]);

  const checkFlipped = flippedObject => {
    changeFlipped([...flippedCards, flippedObject]);
    if (flippedCards.length === 2) {
      if (flippedCards[0].id !== flippedCards[1].id) {
        flippedCards[0].changeFlip(false);
        flippedCards[1].changeFlip(false);
        changeFlipped([]);
      } else {
        changeFlipped([]);
      }
    }
  };
  //Should put in reducer later
  const mode = "Medium";
  //Switch to check which difficulty is used and take the amount of cards needed
  switch (mode) {
    case "Easy":
      usedCards = cards.slice(0, 6);
      break;
    case "Medium":
      usedCards = cards.slice(0, 8);
      break;
    default:
      usedCards = cards;
      break;
  }
  //Used to duplicate the amount of cards since we need two of each and shuffle them using the function defined at the top
  usedCards = shuffle(usedCards.concat(usedCards));
  //Mapping through the array of cards and placing them in the card componenet
  const cardDiv = usedCards.map(card => (
    <Card card={card} checkFlipped={checkFlipped} />
  ));
  console.log("being rendered");
  return (
    <div className="container">
      <div className="jumbotron m-5">
        <h1>Grid</h1>
        {/* Called cardDiv to place the cards in this componenet */}
        <div className="row">{cardDiv}</div>
      </div>
    </div>
  );
};

export default Grid;
