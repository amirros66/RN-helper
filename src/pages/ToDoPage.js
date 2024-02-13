import React from "react";
import "../App.css";
import ToDoList from "../components/ToDoList";

export default function Homepage() {
  return (
    <div>
      <h1>RN Helper</h1>
      <h3>To Do List</h3>
      <div className="resources">
        <ToDoList />
      </div>
    </div>
  );
}
