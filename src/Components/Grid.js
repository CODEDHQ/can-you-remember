import React from "react";
import Card from "./Card";
import cards from "../data";

const Grid = () => {
  const cardDiv = cards.map(card => <Card card={card} />);
  return (
    <div className="container">
      <div className="jumbotron m-5">
        <h1>Grid</h1>
        <div className="row">{cardDiv}</div>
      </div>
    </div>
  );
};

export default Grid;
