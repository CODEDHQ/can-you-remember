import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Difficulty from "./Components/Difficulty";
import Grid from "./Components/Grid";

function App() {
  const [mode, setMode] = useState(null);
  const [difficult, setDifficulty] = useState(null);
  console.log(mode, "  Rendering");
  return (
    <div className="App border my-5">
      {difficult ? (
        <Grid difficult={difficult} mode={mode} />
      ) : (
        <div>
          {mode ? (
            <Difficulty setDifficulty={setDifficulty} />
          ) : (
            <Home setMode={setMode} />
          )}
        </div>
      )}
      <div className="row">
        <div className="col-3">
          <button
            className="btn btn-danger mb-3"
            onClick={() => {
              setMode(null);
              setDifficulty(null);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
