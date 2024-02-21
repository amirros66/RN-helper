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
import Task from "./Task";
import DeleteTasks from "./DeleteTasks";

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
        <br></br>
        <br></br>
        <div className="to-do-container-2">
          {patients.map((patient) => (
            <div key={patient.id} className="patient-box">
              <h4>
                Name + ID: {patient.name} / {patient.id}
              </h4>

              {/* <div className="task-list">
                <h4>Tasks:</h4>
                {tasks
                  .filter((task) => task.patient_id === patient.id)
                  .map((task) => (
                    <p key={task.id}>- {task.title}</p>
                  ))}
              </div> */}
              <div className="task-list">
                <h4>Tasks:</h4>
                {tasks
                  .filter((task) => task.patient_id === patient.id)
                  .map((task) => (
                    <Task key={task.id} task={task} />
                  ))}
              </div>

              <Popup
                trigger={<button className="btn">Add task</button>}
                position="center center"
              >
                {(close) => <AddTask patientId={patient.id} onClose={close} />}
              </Popup>
              <DeleteTasks patientId={patient.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
