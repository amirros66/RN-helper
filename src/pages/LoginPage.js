import React, { useState } from "react";
import "../App.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <div className="loginPage">
      <h1 className="text">Log in</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            className="loginEmail"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailInput}
            required
          />
        </label>
        <br />
        <label>
          Password
          <input
            className="loginPassword"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordInput}
            required
          />
        </label>
        <br />
        <button className="loginButton" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
