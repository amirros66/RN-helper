import React from "react";
import BmiCalculator from "../components/BmiCalculator";
import Calculator from "../components/Calculator";
import ToDoList from "../components/ToDoList";

export default function HomePage() {
  return (
    <div>
      <h1>Nurse Helper</h1>
      <h3>
        These resources are in one place to make your day easier, and your work
        more efficient. <br></br>You can find a BMI calculator, a to do list and
        a calculator to help you with some of your various nursing tasks.
      </h3>
      <br></br>
      <br></br>
      <div className="resourcesContainer">
        <BmiCalculator />
        <Calculator />
        <ToDoList />
      </div>
    </div>
  );
}
