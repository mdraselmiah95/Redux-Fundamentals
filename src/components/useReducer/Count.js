import React, { useReducer } from "react";

const countState = {
  clicks: 0,
  active: true,
  count: 0,
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
      break;
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
      break;
  }
};

const Count = () => {
  const [state, dispatch] = useReducer(countReducer, countState);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
    </div>
  );
};

export default Count;
