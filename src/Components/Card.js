import React, { useState } from "react";
import cardBack from "../images/CardBack.jpg";

const Card = ({ card, checkFlipped }) => {
  const [flipped, changeFlip] = useState(false);

  const handleFlip = () => {
    if (flipped !== true) {
      changeFlip(true);
      setTimeout(
        () => checkFlipped({ id: card.id, changeFlip: changeFlip }),
        1000
      );
    }
  };
  return (
    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 mb-5">
      <div className="card">
        <img
          className="mx-auto"
          src={flipped ? card.front : cardBack}
          //   used percentages instead of pixels to be responsive with the screen size
          height="100%"
          width="100%"
          onClick={() => handleFlip()}
        />
      </div>
    </div>
  );
};

export default Card;
