import "./style.css";
import TipPersentBox from "./TIpPersentBox";
import logo from "./images/logo.svg";
import dollar from "./images/icon-dollar.svg";
import person from "./images/icon-person.svg";
import AmountBlocks from "./AmountBlocks";
import { useState } from "react";

let tipAmounts = [5, 10, 15, 25, 50];
let tipAmountPerPerson;
let totalAmountPerPerson;

function TipCalc() {
  const [selectedTipAmount, setSelectedTipAmount] = useState("15");
  const [bill, setBill] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("1");

  bill === 0 || numberOfPeople === 0
    ? (tipAmountPerPerson = 0)
    : (tipAmountPerPerson = (
        (bill * selectedTipAmount) /
        100 /
        numberOfPeople
      ).toFixed(2));

  bill === 0 || numberOfPeople === 0
    ? (totalAmountPerPerson = 0)
    : (totalAmountPerPerson = (
        (bill + (bill * selectedTipAmount) / 100) /
        numberOfPeople
      ).toFixed(2));

  const handleClick = (val) => {
    setSelectedTipAmount(val);
  };

  function handleClickReset() {
    setSelectedTipAmount("15");
    setBill("");
    setNumberOfPeople("1");
  }

  return (
    <div className="App">
      <div>
        <img src={logo} style={{ margin: "70px 0" }} alt="dollar" />
      </div>
      <div id="container">
        <div className="contFirst">
          <h4 className="header4 h4First">Bill</h4>

          <div className="bigInput">
            <img
              src={dollar}
              style={{ width: "12px", height: "15px" }}
              alt="dollar"
            />
            <input
              type="number"
              className="inputIcon"
              value={bill}
              onChange={(ev) => {
                setBill(Number(ev.target.value));
              }}
            />
          </div>
          <h4 className="header4 h4Second">Select Tip %</h4>
          <div className="tipBox">
            {tipAmounts.map((num) => (
              <TipPersentBox
                persent={num}
                handleClick={handleClick}
                selectedTipAmount={selectedTipAmount}
              />
            ))}
            <input
              className="tipPersentBox"
              type="number"
              style={{
                backgroundColor: "hsl(189, 41%, 97%)",
                color: "hsl(184, 14%, 56%)",
              }}
              value={selectedTipAmount}
              placeholder="Custom"
              onChange={(e) => setSelectedTipAmount(e.target.value)}
            />
          </div>
          <h4 className="header4 h4Third">Number of People</h4>
          <div className="bigInput">
            <img
              src={person}
              style={{ width: "12px", height: "15px" }}
              alt="person"
            />
            <input
              type="text"
              className="inputIcon"
              value={numberOfPeople}
              onChange={(ev) => {
                setNumberOfPeople(Number(ev.target.value));
              }}
            />
          </div>
        </div>
        <div className="contSecond">
          <div className="amoutbd">
            <AmountBlocks
              pNameBlocks="Tip Amount"
              amount={tipAmountPerPerson}
            />
            <AmountBlocks pNameBlocks="Total" amount={totalAmountPerPerson} />
          </div>
          <button className="resetBtn" onClick={handleClickReset}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default TipCalc;
