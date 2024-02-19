import React from "react";
import { NavLink } from "react-router-dom";
import "../styling/navbar.css";

export default function NavBar() {
  return (
    <div className="navContainer">
      <NavLink to="/" className="homeLink">
        RN Helper
      </NavLink>{" "}
      <div className="rightMenu">
        <div className="hamburgerMenu">
          <div className="menuIcon">&#9776;</div>{" "}
          <div className="menuContent">
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/calculator">Calculator</NavLink>
            <NavLink to="/BMI">BMI Calculator</NavLink>
            <NavLink to="/to-do">To Do List</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
