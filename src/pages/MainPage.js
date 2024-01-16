import React from "react";
import ToDoList from "../components/ToDoList";
import "../App.css";
import BmiCalculator from "../components/BmiCalculator";
import Calculator from "../components/Calculator";
export default function Homepage() {
  return (
    <div>
      <h1>RN Helper</h1>
      <div className="resources">
        <BmiCalculator />
        <ToDoList />
        <Calculator />
      </div>
    </div>
  );
}
