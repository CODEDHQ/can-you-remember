import React, { useState, useMemo } from "react";
import Card from "./Card";
import cards from "../data";
import methods from "./methods";

const Grid = React.memo(() => {
  var usedCards = [];
  //   const [flippedCards, changeFlipped] = useState([]);
  const [failedFlips, increaseFailed] = useState(0);
  let flippedCards = [];
  const changeFlipped = anArray => {
    flippedCards = anArray;
  };
  const checkFlipped = flippedObject => {
    changeFlipped([...flippedCards, flippedObject]);
    if (flippedCards.length === 2) {
      if (flippedCards[0].id !== flippedCards[1].id) {
        flippedCards[0].changeFlip(false);
        flippedCards[1].changeFlip(false);
        increaseFailed(failedFlips + 1);
        changeFlipped([]);
      } else {
        changeFlipped([]);
      }
    }
  };
  //Should put in reducer later
  const mode = "Hard";

  //Used to duplicate the amount of cards since we need two of each and shuffle them using the function defined at the top
  const results = useMemo(() => {
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
    return (usedCards = methods.Shuffle(usedCards.concat(usedCards)));
  }, [mode]);

  //Mapping through the array of cards and placing them in the card componenet
  const cardDiv = useMemo(
    () =>
      usedCards.map(card => <Card card={card} checkFlipped={checkFlipped} />),
    []
  );
  return (
    <div className="container">
      <div className="row">
        <div className=" col-9">
          <h1>Grid</h1>
          {/* Called cardDiv to place the cards in this componenet */}
          <div className="row">{cardDiv}</div>
        </div>
        <div className="col-3">
          <h1>Failed Attempts</h1>
          <h3>{failedFlips}</h3>
        </div>
      </div>
    </div>
  );
});

export default Grid;
