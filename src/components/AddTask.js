import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../store/toDoList/toDoListThunks";
import "../styling/addTask.css";

export default function AddTask({ patientId, onClose }) {
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch();

  const handleCreateTask = (e) => {
    e.preventDefault();
    dispatch(createTask(patientId, taskTitle));
    setTaskTitle("");
  };

  const handleHideWindow = () => {
    onClose();
  };

  return (
    <form onSubmit={handleCreateTask} className="add-task-form">
      <label>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          required
          className="task-input"
        />
      </label>
      <br />
      <button type="submit" className="btn">
        +
      </button>
      <button onClick={handleHideWindow}>Hide window</button>
    </form>
  );
}
