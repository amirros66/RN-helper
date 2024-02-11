import React, { useState } from "react";
// import { createPatient } from "../store/toDoList/toDoListThunks";
import "../App.css";
import { useDispatch } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
import AddPatient from "./AddPatient";

export default function ToDoList() {
  //   const [id, setId] = useState("");
  //   const [name, setName] = useState("");
  //   const dispatch = useDispatch();

  //   const notify = () => toast("Patient created.");

  //   const handleCreatePatient = (e) => {
  //     e.preventDefault();
  //     dispatch(createPatient(id, name)).then(() => {
  //       notify();
  //     });
  //   };

  return (
    <div className="container">
      <h2 className="center">To Do List</h2>
      <AddPatient />
    </div>
  );
}
