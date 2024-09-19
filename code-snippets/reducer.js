import { useReducer } from "react";

export default function App() {
  const [total, dispatch] = useReducer(totalReducer, 0);

  function incrementTotal() {
    dispatch({
      type: "increment",
    });
  }

  function decrementTotal() {
    dispatch({
      type: "decrement",
    });
  }

  function totalReducer(total, action) {
    switch (action.type) {
      case "increment": {
        return total + 1;
      }

      case "decrement": {
        return total - 1;
      }

      default: {
        break;
      }
    }
  }

  return (
    <>
      <input type="number" value={total} readonly></input>
      <button type="button" onClick={incrementTotal}>
        Increment
      </button>
      <button type="button" onClick={decrementTotal}>
        Decrement
      </button>
    </>
  );
}

/**
 * Using State
 * 
import { useState } from "react";

export default function App() {
  const [total, setTotal] = useState(0);
  
  function incrementTotal() {
    setTotal(total + 1);
  }

  function decrementTotal() {
    setTotal(total - 1);
  }
  
  return (
    <>
      <input type="number" value={total} name="total" readonly></input>
      <button type="button" name="increment" onClick={incrementTotal}>
        Increment
      </button>
      <button type="button" name="decrement" onClick={decrementTotal}>
        Decrement
      </button>
    </>
  );
}
*/
