import React, { useState } from "react";
import { createPatient } from "../store/toDoList/toDoListThunks";
import "../styling/addPatientTask.css";
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
            className="todo"
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
            className="todo"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br></br>
        <button type="submit">Add patient</button>
      </form>
      <ToastContainer closeButton={false} />
    </>
  );
}
