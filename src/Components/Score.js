import React, { useEffect } from "react";

const Score = ({ failedFlips, player1Score, player2Score, mode }) => {
  useEffect(() => {}, [player1Score, player2Score]);
  const checkMode = () => {
    if (mode === "multi") {
      return (
        <div className="">
          <table class="table table-responsive mx-auto">
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
    }
    return null;
  };
  return (
    <div className="col-3">
      <h1>Failed Attempts</h1>
      <h3>{failedFlips}</h3>
      {checkMode()}
    </div>
  );
};

export default Score;
