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
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  const handlePatientSelect = (patientId) => {
    setSelectedPatientId(patientId);
  };

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

        <div className="to-do-container-2">
          <h3>Patients</h3>
          {patients.map((patient) => (
            <div key={patient.id} className="patient-box">
              <p>Name: {patient.name}</p>
              <p>Patient ID: {patient.id}</p>
              <Popup
                trigger={<button>Add task</button>}
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
