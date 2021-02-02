import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        <span>🗓️</span> Is your birthday lucky? <span>🗓️</span>
      </h1>
      <div className="div-dob">
        <p>Enter your Date of Birth</p>
        <input className="day"></input>
        <input className="month"></input>
        <input className="year"></input>
      </div>
      <div className="div-lucky-number">
        <p>Enter your lucky number</p>
        <input className="lnumber"></input>
      </div>
      <button>Check</button>
    </div>
  );
}
