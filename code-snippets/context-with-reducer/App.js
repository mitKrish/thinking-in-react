// import { useContext } from "react";
import { ScoreProvider } from "./ScoreProvider.js";
import Score from "./Score.js";

export default function App() {
  return (
    <>
      <ScoreProvider>
        <Score></Score>
      </ScoreProvider>
    </>
  );
}

/**
 * Using only reducers
 * 
 * import { useReducer } from "react";
export default function App() {
  const [score, dispatch] = useReducer(scoreReducer, 0);

  function incrementScore() {
    dispatch({
      type: "increment",
    });
  }

  function decrementScore() {
    dispatch({
      type: "decrement",
    });
  }

  function scoreReducer(score, action) {
    switch (action.type) {
      case "increment": {
        return score + 1;
      }

      case "decrement": {
        return score - 1;
      }

      default: {
        throw Error("Invalid Action Type");
      }
    }
  }

  return (
    <>
      <p>{score}</p>
      <br />
      <button type="button" onClick={incrementScore}>
        Increment
      </button>
      <button type="button" onClick={decrementScore}>
        Decrement
      </button>
    </>
  );
}

 */

/**
 * Using only state
 * 
 import { useState } from "react";
export default function App() {
  const [score, setScore] = useState(0);

  function incrementScore() {
    setScore(score + 1);
  }

  function decrementScore() {
    setScore(score - 1);
  }

  return (
    <>
      <p>{score}</p>
      <br />
      <button type="button" onClick={incrementScore}>
        Increment
      </button>
      <button type="button" onClick={decrementScore}>
        Decrement
      </button>
    </>
  );
}
*/
