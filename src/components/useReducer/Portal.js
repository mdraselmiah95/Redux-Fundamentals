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
      <button onClick={() => dispatch({ type: "ADD_PATIENT", name })}>
        Add
      </button>
      <br />
      <h3>Added Patients:</h3>
      {state.patients.map((patient) => (
        <p key={patient.id}>
          {patient.name}{" "}
          <button
            onClick={() => dispatch({ type: "REMOVE_PATIENT", id: patient.id })}
          >
            X
          </button>
        </p>
      ))}
    </div>
  );
};

export default Portal;
