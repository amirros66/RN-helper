import React from "react";
import "../App.css";
import Calculator from "../components/Calculator";
export default function CalculatorPage() {
  return (
    <div>
      <h1>RN Helper</h1>
      <h3>Calculator</h3>
      <div className="resources">
        <Calculator />
      </div>
    </div>
  );
}
