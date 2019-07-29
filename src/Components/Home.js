import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="jumbotron m-5">
        <div className="mb-5">
          <h1>Can you remember?</h1>
        </div>
        <div>
          <button type="button" className="btn btn-danger mb-3">
            Single Player
          </button>
        </div>
        <div>
          <button type="button" className="btn btn-danger">
            Multi Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
