import React, { useState } from "react";
import "../styling/toDoList.css";
import { useSelector } from "react-redux";
import {
  selectPatients,
  selectPatientsTasks,
} from "../store/toDoList/toDoListSelector";
import AddPatient from "./AddPatient";
import AddTask from "./AddTask";

export default function ToDoList() {
  const patients = useSelector(selectPatients);
  const tasks = useSelector(selectPatientsTasks);
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  const handlePatientSelect = (patientId) => {
    setSelectedPatientId(patientId);
  };

  return (
    <>
      <div className="box">
        <div className="to-do-container-1">
          <h3>Add Patient</h3>
          <AddPatient />
        </div>

        <div className="to-do-container-2">
          <h3>Patients</h3>
          {patients.map((patient) => (
            <div key={patient.id}>
              <p>Name: {patient.name}</p>
              <p>Patient ID: {patient.id}</p>
              <button onClick={() => handlePatientSelect(patient.id)}>
                Add Task
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="to-do-container-3">
        {/* <h3>Tasks</h3> */}
        {selectedPatientId && <AddTask patientId={selectedPatientId} />}
        {tasks
          .filter((task) => task.patient_id === selectedPatientId)
          .map((task, index) => (
            <div key={index}>
              <div className="list-of-tasks">
                <p>Task Title: {task.title}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
