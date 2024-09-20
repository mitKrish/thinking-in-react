import { createContext, useContext, useReducer } from "react";

const ScoreContext = createContext(null);
const ScoreDispatchContext = createContext(null);

export function ScoreProvider({ children }) {
  const [score, dispatch] = useReducer(scoreReducer, 5);

  return (
    <ScoreContext.Provider value={score}>
      <ScoreDispatchContext.Provider value={dispatch}>
        {children}
      </ScoreDispatchContext.Provider>
    </ScoreContext.Provider>
  );
}

export function useScore() {
  // console.log("ScoreContext", useContext(ScoreContext));
  return useContext(ScoreContext);
}

export function useScoreDispatch() {
  // console.log("ScoreDispatchContext", useContext(ScoreDispatchContext));
  return useContext(ScoreDispatchContext);
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
