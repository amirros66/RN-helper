import React, { useState } from "react";
import { createTask } from "../store/toDoList/toDoListThunks";
// import "../App.css";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

export default function ToDoList() {
  const [patient_id, setPatient_Id] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const notify = () => toast("Task created for this patient.");

  const handleCreateTask = (e) => {
    e.preventDefault();
    dispatch(createTask(patient_id, title)).then(() => {
      notify();
    });
  };

  return (
    <>
      <form onSubmit={handleCreateTask}>
        <label>
          Patient ID or Bed/ Room Number:
          <input
            type="number"
            value={patient_id}
            onChange={(e) => setPatient_Id(e.target.value)}
            required
          />
        </label>
        <br></br>
        <label>
          Task:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
      <ToastContainer closeButton={false} />
    </>
  );
}