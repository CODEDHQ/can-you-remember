import React from "react";

const Card = ({ card }) => {
  console.log(card);
  return (
    <div className="col-3 mb-5">
      <div className="card">
        <img
          className="mx-auto"
          src={card.front}
          height="300px"
          width="200px"
        />
      </div>
    </div>
  );
};

export default Card;
