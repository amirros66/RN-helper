import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePatientTasks } from "../store/toDoList/toDoListThunks";
import "../styling/deleteTasks.css";

export default function DeleteTasks({ patientId }) {
  const dispatch = useDispatch();

  const handleDeleteTasks = (e) => {
    e.preventDefault();
    dispatch(deletePatientTasks(patientId));
  };

  return (
    <div>
      <button onClick={handleDeleteTasks} className="btn">
        Delete tasks
      </button>
    </div>
  );
}
