import React, { useState } from "react";
import { createPatient } from "../store/toDoList/toDoListThunks";
// import "../App.css";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

export default function ToDoList() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const notify = () => toast("Patient created.");

  const handleCreatePatient = (e) => {
    e.preventDefault();
    dispatch(createPatient(id, name)).then(() => {
      notify();
    });
  };

  return (
    <>
      <form onSubmit={handleCreatePatient}>
        <label>
          Patient ID or Bed/ Room Number:
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </label>
        <br></br>
        <label>
          Patient name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add patient</button>
      </form>
      <ToastContainer closeButton={false} />
    </>
  );
}
