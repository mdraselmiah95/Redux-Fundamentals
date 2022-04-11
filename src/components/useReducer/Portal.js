import React, { useReducer, useState } from "react";
import { portalState } from "../../store/portalStore";
import { portalReducer } from "../reducers/portalReducer";

const Portal = () => {
  const [state, dispatch] = useReducer(portalReducer, portalState);
  const [name, setName] = useState("");
  return (
    <div style={{ marginLeft: "10%" }}>
      <h1>This is Portal.</h1>
      <h3>Has Patients:{state.patients.length}</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button>Add</button>
    </div>
  );
};

export default Portal;
