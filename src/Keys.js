import React, { useState } from "react";
import Grid from "@mui/material/Grid";

function Keys() {
  const [keyOn, setKeyOn] = useState("");

  return (
    <div>
      <h3>Word of the Day</h3>

      <div>
        <Grid
          item
          xs={5}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {keyOn}
        </Grid>
      </div>
      <br />

      <h4>Keyboard</h4>
      <button onClick={() => setKeyOn(keyOn + "Q")} value="Q">
        Q
      </button>
      <button onClick={() => setKeyOn(keyOn + "W")} value="W">
        W
      </button>
      <button onClick={() => setKeyOn(keyOn + "E")} value="E">
        E
      </button>
      <button onClick={() => setKeyOn(keyOn + "R")} value="R">
        R
      </button>
      <button onClick={() => setKeyOn(keyOn + "T")} value="T">
        T
      </button>
      <button onClick={() => setKeyOn(keyOn + "Y")} value="Y">
        Y
      </button>
      <button onClick={() => setKeyOn(keyOn + "U")} value="U">
        U
      </button>
      <button onClick={() => setKeyOn(keyOn + "I")} value="I">
        I
      </button>
      <button onClick={() => setKeyOn(keyOn + "O")} value="O">
        O
      </button>
      <button onClick={() => setKeyOn(keyOn + "P")} value="P">
        P
      </button>
      <br />
      <button onClick={() => setKeyOn(keyOn + "A")} value="A">
        A
      </button>
      <button onClick={() => setKeyOn(keyOn + "S")} value="S">
        S
      </button>
      <button onClick={() => setKeyOn(keyOn + "D")} value="D">
        D
      </button>
      <button onClick={() => setKeyOn(keyOn + "F")} value="F">
        F
      </button>
      <button onClick={() => setKeyOn(keyOn + "G")} value="G">
        G
      </button>
      <button onClick={() => setKeyOn(keyOn + "H")} value="H">
        H
      </button>
      <button onClick={() => setKeyOn(keyOn + "J")} value="J">
        J
      </button>
      <button onClick={() => setKeyOn(keyOn + "K")} value="K">
        K
      </button>
      <button onClick={() => setKeyOn(keyOn + "L")} value="L">
        L
      </button>
      <br />
      <button onClick={() => setKeyOn(keyOn + "Z")} value="Z">
        Z
      </button>
      <button onClick={() => setKeyOn(keyOn + "X")} value="X">
        X
      </button>
      <button onClick={() => setKeyOn(keyOn + "C")} value="C">
        C
      </button>
      <button onClick={() => setKeyOn(keyOn + "V")} value="V">
        V
      </button>
      <button onClick={() => setKeyOn(keyOn + "B")} value="B">
        B
      </button>
      <button onClick={() => setKeyOn(keyOn + "N")} value="N">
        N
      </button>
      <button onClick={() => setKeyOn(keyOn + "M")} value="M">
        M
      </button>
      <button>Del</button>
      <button>Enter</button>
    </div>
  );
}

export default Keys;
