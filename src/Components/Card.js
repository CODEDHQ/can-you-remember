import React, { useState } from "react";
import cardBack from "../images/CardBack.jpg";
import ReactCardFlip from "react-card-flip";

const Card = ({ card, checkFlipped }) => {
  const [flipped, changeFlip] = useState(false);

  const handleFlip = () => {
    if (flipped !== true) {
      changeFlip(true);
      //   setTimeout(
      //     () => checkFlipped({ id: card.id, changeFlip: changeFlip }),
      //     1000
      //   );
      checkFlipped({ id: card.id, changeFlip: changeFlip });
    }
  };
  return (
    <div className="col-3 mb-5">
      {/* <div className="card">
        <img
          className="mx-auto"
          src={flipped ? card.front : cardBack}
          //   used percentages instead of pixels to be responsive with the screen size
          height="100%"
          width="100%"
          onClick={() => handleFlip()}
        />
      </div> */}
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <img
          className="mx-auto"
          src={cardBack}
          //   used percentages instead of pixels to be responsive with the screen size
          height="100%"
          width="100%"
          key="front"
          onClick={() => handleFlip()}
        />

        <img
          className="mx-auto"
          src={card.front}
          //   used percentages instead of pixels to be responsive with the screen size
          height="100%"
          width="100%"
          key="back"
          onClick={() => handleFlip()}
        />
      </ReactCardFlip>
    </div>
  );
};

export default Card;
