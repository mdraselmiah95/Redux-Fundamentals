import React, { useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      break;

    default:
      break;
  }
};

const Count = () => {
  const [state, dispatch] = useReducer(countReducer);
  return (
    <div>
      <h1>rr</h1>
    </div>
  );
};

export default Count;
