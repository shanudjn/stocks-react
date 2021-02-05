import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [day, setDay] = useState(0);
  var [month, setMonth] = useState(0);
  var [year, setYear] = useState(0);
  var [luckyNumber, setLuckyNumber] = useState(0);
  var [toggle, setToggle] = useState(0);
  var [resultMessage, setResultMessage] = useState("");

  // function clickHandler(event) {
  //   console.log(event.target.value);
  // }
  const showResult = (total, luckyNumber) => {
    if (total % luckyNumber === 0) {
      //setToggle = 1;
      console.log(total % luckyNumber);
      setResultMessage("Its Lucky");
      console.log(resultMessage);
    } else {
      //setToggle = 1;
      setResultMessage("Its Not");
    }
  };
  const getSum = (number) => {
    var sum = 0;
    while (number !== 0) {
      let temp = number % 10;
      number = Math.floor(number / 10);
      sum += temp;
    }
    return sum;
  };
  const handleSubmit = (event) => {
    console.log(
      `Day : ${day}
      Month : ${month}
      Year : ${year}
      Lucky Number : ${luckyNumber}`
    );
    event.preventDefault();
    let daySum = getSum(day);
    let monthSum = getSum(month);
    let yearSum = getSum(year);

    let total = daySum + monthSum + yearSum;

    console.log(total);

    showResult(total, luckyNumber);
  };

  return (
    <>
      <div className="App">
        <h1>
          <span>🗓️</span> Is your birthday lucky? <span>🗓️</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="div-dob">
            <p>Enter your Date of Birth</p>
            <input
              className="day"
              placeholder="Day"
              type="number"
              min="1"
              max="31"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            ></input>
            <input
              className="month"
              placeholder="Month"
              type="number"
              min="1"
              max="12"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            ></input>

            <input
              className="year"
              placeholder="Year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            ></input>
          </div>
          <div className="div-lucky-number">
            <p>Enter your lucky number</p>
            <input
              className="lnumber"
              type="number"
              value={luckyNumber}
              onChange={(e) => setLuckyNumber(e.target.value)}
            ></input>
          </div>
          <button>Check</button>
        </form>
      </div>
      <div>{resultMessage}</div>
    </>
  );
}
