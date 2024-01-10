import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateHeight,
  updateWeight,
  calculateBMI,
} from "../store/bmiCalculator/bmiSlice";
import {
  selectHeight,
  selectWeight,
  selectBMI,
} from "../store/bmiCalculator/bmiSelector";

export default function BmiCalculator() {
  const dispatch = useDispatch();
  const height = useSelector(selectHeight);
  const weight = useSelector(selectWeight);
  const bmi = useSelector(selectBMI);

  const calculate = () => {
    const heightInMeters = height / 100;
    dispatch(calculateBMI(heightInMeters));
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => dispatch(updateHeight(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => dispatch(updateWeight(e.target.value))}
          />
        </label>
      </div>
      <button onClick={calculate}>Calculate BMI</button>
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
}
