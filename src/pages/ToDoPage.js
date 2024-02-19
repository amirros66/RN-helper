import React from "react";
import "../App.css";
import ToDoList from "../components/ToDoList";

export default function Homepage() {
  return (
    <div>
      {/* <h1>RN Helper</h1> */}
      <h1>To Do List</h1>
      <div className="resources">
        <ToDoList />
      </div>
    </div>
  );
}
