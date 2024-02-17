import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPatient } from "../store/toDoList/toDoListThunks";

export default function AddPatient() {
  const [patientId, setPatientId] = useState("");
  const [patientName, setPatientName] = useState("");
  const dispatch = useDispatch();

  const handleCreatePatient = (e) => {
    e.preventDefault();
    dispatch(createPatient(patientId, patientName));
    setPatientId("");
    setPatientName("");
  };

  return (
    <form onSubmit={handleCreatePatient}>
      <label>
        Patient Number:
        <br />
        <input
          type="number"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Patient Name:
        <br />
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit" className="btn">
        Add Patient
      </button>
    </form>
  );
}
