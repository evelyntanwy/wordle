import React, { useState } from "react";

function Keys() {
  const [keyOn, setKeyOn] = useState("");
  const [keyTwo, setKeyTwo] = useState([...keyOn]);

  const handleClick = (evt) => {
    console.log(evt.target.value);
    setKeyOn(evt.target.value);
    setKeyTwo(keyOn);
  };

  const handleChange = () => {
    setKeyOn(keyOn);
  };

  return (
    <div>
      <h3>Word of the Day</h3>
      <form>
        <input type="text" onChange={handleClick} value={keyOn + keyTwo} />
      </form>
      <br />
      <h4>Keyboard</h4>
      <button onClick={handleClick} value="Q">
        Q
      </button>
      <button onClick={handleClick} value="W">
        W
      </button>
      <button onClick={handleClick} value="E">
        E
      </button>
      <button onClick={handleClick} value="R">
        R
      </button>
      <button onClick={handleClick} value="T">
        T
      </button>
      <button onClick={handleClick} value="Y">
        Y
      </button>
      <button onClick={handleClick} value="U">
        U
      </button>
      <button onClick={handleClick} value="I">
        I
      </button>
      <button onClick={handleClick} value="O">
        O
      </button>
      <button onClick={handleClick} value="P">
        P
      </button>
      <br />
      <button onClick={handleClick} value="A">
        A
      </button>
      <button onClick={handleClick} value="S">
        S
      </button>
      <button onClick={handleClick} value="D">
        D
      </button>
      <button onClick={handleClick} value="F">
        F
      </button>
      <button onClick={handleClick} value="G">
        G
      </button>
      <button onClick={handleClick} value="H">
        H
      </button>
      <button onClick={handleClick} value="J">
        J
      </button>
      <button onClick={handleClick} value="K">
        K
      </button>
      <button onClick={handleClick} value="L">
        L
      </button>
      <br />
      <button onClick={handleClick} value="Z">
        Z
      </button>
      <button onClick={handleClick} value="X">
        X
      </button>
      <button onClick={handleClick} value="C">
        C
      </button>
      <button onClick={handleClick} value="V">
        V
      </button>
      <button onClick={handleClick} value="B">
        B
      </button>
      <button onClick={handleClick} value="N">
        N
      </button>
      <button onClick={handleClick} value="M">
        M
      </button>
      <button>Del</button>
      <button>Enter</button>
    </div>
  );
}

export default Keys;
