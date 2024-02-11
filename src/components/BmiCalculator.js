import React, { useState } from "react";
import "../styling/bmi.css";
import "../App.css";

export default function BmiCalculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  //Calculations
  const calculateBMI = (event) => {
    //prevent submitting
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Enter valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      //message
      if (bmi < 18.5) {
        setMessage("This is underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("This is a healthy weight");
      } else {
        setMessage("This is overweight");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h2 className="center">BMI Calculator</h2>
      <form onSubmit={calculateBMI}>
        <div>
          <label>Weight in (lbs)</label>
          <input
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          />
        </div>
        <div>
          <label>Height (in)</label>
          <input
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />
        </div>
        <div>
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn btn-outline" onClick={reload} type="submit">
            Reload
          </button>
        </div>
      </form>
      <div className="center">
        <h3>BMI is: {bmi}</h3>
        <p className="bmiMessage">{message}</p>
      </div>
    </div>
  );
}
