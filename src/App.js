import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [day, setDay] = useState(0);
  var [month, setMonth] = useState(0);
  var [year, setYear] = useState(0);

  return (
    <div className="App">
      <h1>
        <span>🗓️</span> Is your birthday lucky? <span>🗓️</span>
      </h1>
      <div className="div-dob">
        <p>Enter your Date of Birth</p>
        <input
          className="day"
          placeholder="Day"
          type="number"
          min="1"
          max="31"
        ></input>
        <input
          className="month"
          placeholder="Month"
          type="number"
          min="1"
          max="12"
        ></input>
        <input className="year" placeholder="Year" type="number"></input>
      </div>
      <div className="div-lucky-number">
        <p>Enter your lucky number</p>
        <input className="lnumber"></input>
      </div>
      <button>Check</button>
    </div>
  );
}
