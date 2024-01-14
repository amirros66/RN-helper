import "./App.css";
import "../src/components/BmiCalculator";
import BmiCalculator from "../src/components/BmiCalculator";
import Calculator from "./components/Calculator";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <div className="App">
        <div className="banner"></div>
        <h1>Nurse Helper</h1>
        <h3>
          These resources are in one place to make your day easier, and your
          work more efficient. <br></br>You can find a BMI calculator, a to do
          list and a calculator to help you with some of your various nursing
          tasks.
        </h3>
        <br></br>
        <br></br>
        <div className="resources">
          <BmiCalculator />
          <Calculator />
          <ToDoList />
        </div>
      </div>
    </>
  );
}

export default App;
