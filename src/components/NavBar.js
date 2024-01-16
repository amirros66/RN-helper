import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <>
      <div className="navContainer">
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/homepage">Home</NavLink>
      </div>
    </>
  );
}
