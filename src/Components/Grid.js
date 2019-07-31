import React, { useState, useEffect } from "react";
import Card from "./Card";
import cards from "../data";
import methods from "./methods";
import Score from "./Score";

const Grid = ({ mode, difficult }) => {
  const [usedCards, setUsedCards] = useState([]);
  //   const [flippedCards, changeFlipped] = useState([]);

  //To Store player scores and pass them
  const [playerScores, setPlayersScores] = useState([
    { player1Score: 0 },
    { player2Score: 0 }
  ]);
  //To know which player's turn it is
  const [player1Turn, setPlayerTurn] = useState(true);
  const [failedFlips, increaseFailed] = useState(0);
  let flippedCards = [];
  const changeFlipped = anArray => {
    flippedCards = anArray;
  };

  const unflipCards = (unflip1, unflip2) => {
    setTimeout(() => {
      unflip1(false);
      unflip2(false);
    }, 1000);
  };

  const checkFlipped = flippedObject => {
    changeFlipped([...flippedCards, flippedObject]);

    if (flippedCards.length === 2) {
      if (flippedCards[0].id !== flippedCards[1].id) {
        unflipCards(flippedCards[0].changeFlip, flippedCards[1].changeFlip);
        increaseFailed(failedFlips + 1);
        setPlayerTurn(!player1Turn);
      } else {
        if (mode === "multi") {
          let temp = playerScores;
          if (player1Turn) {
            temp[0].player1Score += 1;
          } else {
            temp[1].player2Score += 1;
          }
          setPlayersScores(temp);
        }
      }
      changeFlipped([]);
    }
  };

  //Used to duplicate the amount of cards since we need two of each and shuffle them using the function defined at the top
  console.log(playerScores[0].player1Score);
  useEffect(() => {
    let cardsToUse = [];
    switch (difficult) {
      case "easy":
        cardsToUse = cards.slice(0, 6);
        break;
      case "medium":
        cardsToUse = cards.slice(0, 8);
        break;
      default:
        cardsToUse = cards;
        break;
    }
    setUsedCards(() => methods.Shuffle(cardsToUse.concat(cardsToUse)));
  }, [difficult]);

  //Switch to check which difficulty is used and take the amount of cards needed

  //Mapping through the array of cards and placing them in the card componenet
  const cardDiv = usedCards.map((card, idx) => (
    <Card key={`${card.id}-${idx}`} card={card} checkFlipped={checkFlipped} />
  ));

  return (
    <div className="container">
      <div className="row">
        <div className=" col-9">
          <h1>Grid</h1>
          {mode === "multi" ? (
            <div>
              <h1>{player1Turn ? "Player 1's Turn" : "Player 2's Turn"}</h1>
            </div>
          ) : null}
          {/* Called cardDiv to place the cards in this componenet */}
          <div className="row">{cardDiv}</div>
        </div>
        <Score
          failedFlips={failedFlips}
          player1Score={playerScores[0].player1Score}
          player2Score={playerScores[1].player2Score}
          mode={mode}
        />
      </div>
    </div>
  );
};

export default Grid;
