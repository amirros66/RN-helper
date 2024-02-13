import "./App.css";
import "../src/components/BmiCalculator";

import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
// import MainPage from "./pages/MainPage";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import CalculatorPage from "./pages/CalculatorPage";
import BMIpage from "./pages/BMIpage";
import TodoPage from "./pages/ToDoPage";

function App() {
  return (
    <>
      <div className="App">
        {/* <div className="banner"> */}
        <NavBar />
        <Routes>
          <Route path="/homepage" element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/mainpage" element={<MainPage />} /> */}
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/BMI" element={<BMIpage />} />
          <Route path="/to-do" element={<TodoPage />} />
        </Routes>
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
