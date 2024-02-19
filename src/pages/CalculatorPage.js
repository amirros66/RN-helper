import React from "react";
import "../App.css";

import Calculator from "../components/Calculator";
export default function CalculatorPage() {
  return (
    <div>
      {/* <h1>RN Helper</h1> */}
      <h1>Calculator</h1>
      <div className="resources">
        <Calculator />
      </div>
    </div>
  );
}
