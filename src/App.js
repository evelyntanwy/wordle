import { useEffect, useState } from "react";
import "./App.css";
import Keys from "./Keys";
import { wordList } from "./list/data";

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("keyboard-data"))
  );
  const [charArray, setCharArray] = useState([]);

  useEffect(() => {
    if (!data || !data.solution) {
      const alphaIndex = Math.floor(Math.random() * 26);
      const wordIndex = Math.floor(
        Math.random() * wordList[String.fromCharCode(97 + alphaIndex)].length
      );
      let newBoardData = {
        ...data,
        solution: wordList[String.fromCharCode(97 + alphaIndex)][wordIndex],
        rowIndex: 0,
        boardWord: [],
        boardRowStatus: [],
        presentCharArray: [],
        absentCharArray: [],
        correctCharArray: [],
        status: "IN_PROGRESS",
      };
      setBoardData(newBoardData);
      localStorage.setItem("board-data", JSON.stringify(newBoardData));
    }
  }, []);

  return (
    <div className="App">
      <h1>Hello Wordle</h1>
      <Keys />
    </div>
  );
}

export default App;
