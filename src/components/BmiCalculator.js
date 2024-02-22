import React, { useState } from "react";
import "../styling/bmi.css";
// import "../App.css";

export default function BmiCalculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [unit, setUnit] = useState("metric");

  const calculateBMI = (event) => {
    event.preventDefault();
    let weightInKg = weight;
    let heightInMeters = height;

    // Convert from imperial to metric if necessary
    if (unit === "imperial") {
      // Convert height from feet and inches to meters
      heightInMeters = height * 0.0254;
      // Convert weight from stones to kilograms
      weightInKg = weight * 6.35029;
    }

    if (weightInKg === 0 || heightInMeters === 0) {
      alert("Please enter valid weight and height");
    } else {
      let bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 18.5) {
        setMessage("Under 18.5: Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage("18.5 - 24.9: Healthy weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage("25 - 29.9: Overweight");
      } else {
        setMessage("Above 30: Obese");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <h1>BMI Calculator</h1>
      <label>Unit </label>

      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="drop_down"
      >
        <option value="metric">Metric (kg, meters)</option>
        <option value="imperial">Imperial (stone, inches)</option>
      </select>
      <br></br>
      <br></br>
      <div className="container">
        <form onSubmit={calculateBMI}>
          <div>
            <label>Weight ({unit === "metric" ? "kg" : "stones"})</label>
            <br></br>
            <input
              className="input"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div>
            <label>Height ({unit === "metric" ? "meters" : "inches"})</label>
            <br></br>
            <input
              className="input"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <br></br>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <br></br>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
        </form>
      </div>
      <div className="center">
        <h3>{bmi}</h3>
        <p className="bmiMessage">{message}</p>
      </div>
    </>
  );
}
