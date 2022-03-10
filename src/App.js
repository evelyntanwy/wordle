import { useEffect, useState } from "react";
import "./App.css";
import Keys from "./Keys";
import { wordList } from "./list/data";

function App() {
  return (
    <div className="App">
      <h1>Hello Wordle</h1>
      <Keys />
    </div>
  );
}

export default App;
