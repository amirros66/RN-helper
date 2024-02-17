import React, { useState } from "react";
// import { createPatient } from "../store/toDoList/toDoListThunks";
// import "../App.css";
import "../styling/toDoList.css";
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
    <>
      <div className="Add">
        <div className="to-do-container-1">
          <h3 className="center">Add patient</h3>
          <AddPatient />
        </div>
        <div className="to-do-container-2">
          <h3>Add task</h3>
          <AddTask />
        </div>
      </div>

      <div className="to-do-container-3">
        {Array.isArray(patients) && patients.length === 0 ? (
          <p>No patients.</p>
        ) : (
          patients.map((patient, index) => (
            <div key={index}>
              {/* <h2>Patients:</h2> */}
              <p>Name: {patient.name}</p>
              <p>Patient ID: {patient.id}</p>

              <div>
                {/* <h4>Tasks for this patient:</h4> */}
                {/* Filter tasks for the current patient and map over them */}
                {tasks.filter((task) => task.patient_id === patient.id)
                  .length === 0 ? (
                  <p>No tasks</p>
                ) : (
                  tasks
                    .filter((task) => task.patient_id === patient.id)
                    .map((task, taskIndex) => (
                      <p key={taskIndex}>{task.title}</p>
                    ))
                )}
                <br></br>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
