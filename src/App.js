import "./App.css";
import "../src/components/BmiCalculator";

import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

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
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
