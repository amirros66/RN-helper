import React, { useState } from "react";
import "../styling/toDoList.css";
import { useSelector } from "react-redux";
import {
  selectPatients,
  selectPatientsTasks,
} from "../store/toDoList/toDoListSelector";
import AddPatient from "./AddPatient";
import AddTask from "./AddTask";
import Popup from "reactjs-popup";

export default function ToDoList() {
  const patients = useSelector(selectPatients);
  const tasks = useSelector(selectPatientsTasks);

  const handleClosePopup = (close) => {
    close();
  };

  return (
    <>
      <div className="box">
        <div className="to-do-container-1">
          <h3>Add Patient</h3>
          <AddPatient />
        </div>
        <h3>Patients</h3>
        <div className="to-do-container-2">
          {patients.map((patient) => (
            <div key={patient.id} className="patient-box">
              <p>Patient ID: {patient.id}</p>
              <p>Name: {patient.name}</p>

              <div className="task-list">
                <h4>Tasks:</h4>
                {tasks
                  .filter((task) => task.patient_id === patient.id)
                  .map((task) => (
                    <p key={task.id}>- {task.title}</p>
                  ))}
              </div>
              <Popup
                trigger={<button className="btn">Add task</button>}
                position="center center"
              >
                {(close) => <AddTask patientId={patient.id} onClose={close} />}
              </Popup>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
