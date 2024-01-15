import React, { useState } from "react";
import "../App.css";
import Display from "./Display";
import Keypad from "./Keypad";

export default function Calculator() {
  return (
    <div className="container">
      <h2 className="center">Calculator</h2>
      <Display />
      <br></br>
      <Keypad />
    </div>
  );
}
