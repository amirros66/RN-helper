import React from "react";
import "../App.css";
import BmiCalculator from "../components/BmiCalculator";

export default function Homepage() {
  return (
    <div>
      <h1>RN Helper</h1>
      <h3>BMI Calculator</h3>
      <div className="resources">
        <BmiCalculator />
      </div>
    </div>
  );
}
