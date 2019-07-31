import React, { useEffect } from "react";

const Score = ({ player1Score, player2Score }) => {
  useEffect(() => {}, [player1Score, player2Score]);

  return (
    <div className="col-3 border">
      <h3>Score</h3>
      <table className="table table-responsive mx-auto">
        <thead>
          <tr>
            <th scope="col">Player 1</th>
            <th scope="col">Player 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{player1Score}</td>
            <td>{player2Score}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Score;
