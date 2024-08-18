import React, { useState } from "react";
import './Bmi.css';

const Bmi = () => {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBmi = (event) => {
    event.preventDefault();

    if (!weight || !height) {
      alert("Please enter a valid weight and height");
      return;
    }

    const bmiValue = (weight / (height * height)) * 703;
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setMessage("You are underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage("You are at a healthy weight");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage("You are overweight");
    } else {
      setMessage("You are obese");
    }
  };

  const resetForm = () => {
    setWeight(null);
    setHeight(null);
    setBmi(null);
    setMessage("");
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calculateBmi}>
          <div className="input-group">
            <label>Weight (lbs)</label>
            <input
              type="number"
              value={weight || ""}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Height (in)</label>
            <input
              type="number"
              value={height || ""}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="button-group">
            <button className="btn" type="submit">
              Calculate
            </button>
            <button className="btn btn-outline" type="button" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>

        {bmi && (
          <div className="result">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bmi;
