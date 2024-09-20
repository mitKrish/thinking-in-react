import { useScore, useScoreDispatch } from "./ScoreProvider.js";

export default function Score() {
  const score = useScore();
  const dispatch = useScoreDispatch();
//   console.log("score", score);
//   console.log("dispatch", dispatch);

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

  return (
    <>
      <p>Score : {score}</p>
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
