import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../store/toDoList/toDoListThunks";

export default function AddTask({ patientId }) {
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch();

  const handleCreateTask = (e) => {
    e.preventDefault();
    dispatch(createTask(patientId, taskTitle));
    setTaskTitle("");
  };

  return (
    <form onSubmit={handleCreateTask}>
      <label>
        Task:
        <br />
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit" className="btn">
        Add Task
      </button>
    </form>
  );
}
