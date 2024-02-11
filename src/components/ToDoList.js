import React, { useState } from "react";
// import { createPatient } from "../store/toDoList/toDoListThunks";
import "../App.css";
// import { useDispatch } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
import AddPatient from "./AddPatient";
import AddTask from "./AddTask";
import { useSelector } from "react-redux";
import {
  selectPatients,
  selectPatientsTasks,
} from "../store/toDoList/toDoListSelector";

export default function ToDoList() {
  const patients = useSelector(selectPatients);
  const tasks = useSelector(selectPatientsTasks);

  return (
    <div className="container">
      <h2 className="center">To Do List</h2>
      <AddPatient />
      <AddTask />
      {Array.isArray(patients) && patients.length === 0 ? (
        <p>No patients.</p>
      ) : (
        patients.map((patient, index) => (
          <div key={index}>
            <h2>Patients:</h2>
            <p>Patient ID: {patient.id}</p>
            <p>Name: {patient.name}</p>

            <div>
              <h4>Tasks for this patient:</h4>
              {/* Filter tasks for the current patient and map over them */}
              {tasks.filter((task) => task.patient_id === patient.id).length ===
              0 ? (
                <p>No tasks for this patient.</p>
              ) : (
                tasks
                  .filter((task) => task.patient_id === patient.id)
                  .map((task, taskIndex) => <p key={taskIndex}>{task.title}</p>)
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
