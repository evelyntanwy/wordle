import React, { useState } from "react";

export default function TestKey() {
  const [myString, setCount] = useState("");

  return (
    <div>
      <p>Your string: {myString}</p>
      <button onClick={() => setCount(myString + "A")}>Click to add "A"</button>
      <button onClick={() => setCount(myString + "B")}>Click to add "B"</button>
      <button onClick={() => setCount(myString + "C")}>Click to add "C"</button>
    </div>
  );
}
