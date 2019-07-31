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
    <div className="App">
      {difficult ? (
        <div>
          <Grid mode={difficult} />
        </div>
      ) : (
        <div>
          {mode ? (
            <Difficulty setDifficulty={setDifficulty} />
          ) : (
            <Home setMode={setMode} />
          )}
        </div>
      )}
      {/* <Home /> */}
      {/* <Grid mode="Medium" /> */}
    </div>
  );
}

export default App;
