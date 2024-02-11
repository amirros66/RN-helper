import React, { useState } from "react";
import "../App.css";
import Display from "./Display";
import Keypad from "./Keypad";
import * as math from "mathjs";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        // Use mathjs to evaluate the expression
        const result = math.evaluate(input);
        setInput(result.toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="container">
      <Display input={input} />
      <br></br>
      <br></br>
      <Keypad onClick={handleClick} />
    </div>
  );
}
