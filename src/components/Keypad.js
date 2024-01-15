import React from "react";

export default function Keypad() {
  //   handleClick = (value) => {
  //     // handle the button click here
  //   };
  return (
    <div className="keypad">
      {/* keypad buttons */}
      <button onClick={() => this.handleClick("()")}>()</button>
      <button onClick={() => this.handleClick("%")}>%</button>
      <br></br>
      <button onClick={() => this.handleClick(7)}>7</button>
      <button onClick={() => this.handleClick(8)}>8</button>
      <button onClick={() => this.handleClick(9)}>9</button>
      <br></br>

      <button onClick={() => this.handleClick(4)}>4</button>
      <button onClick={() => this.handleClick(5)}>5</button>
      <button onClick={() => this.handleClick(6)}>6</button>
      <br></br>

      <button onClick={() => this.handleClick(1)}>1</button>
      <button onClick={() => this.handleClick(2)}>2</button>
      <button onClick={() => this.handleClick(3)}>3</button>
      <br></br>

      <button onClick={() => this.handleClick(0)}>0</button>
    </div>
  );
}
