import React, { useState } from "react";
import "../styling/bmi.css";
// import "../App.css";

export default function BmiCalculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  //Calculations
  const calculateBMI = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter valid weight and height");
    } else {
      // Update formula for metric system
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed(1));

      //message
      if (bmi < 18.5) {
        setMessage("BMI under 18.5: Underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("BMI between 18.5 - 24.9: Healthy weight");
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage("BMI between 25 - 29.9: Overweight");
      } else {
        setMessage("BMI above 30: Obese");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <h1>BMI Calculator</h1>
      <div className="container">
        <form onSubmit={calculateBMI}>
          <div>
            <label>Weight (kg)</label>
            <br></br>
            <input
              className="input"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div>
            <label>Height (metres)</label>
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
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
        </form>
        <div className="center">
          <h3>BMI is {bmi}</h3>
          <p className="bmiMessage">{message}</p>
        </div>
      </div>
    </>
  );
}
