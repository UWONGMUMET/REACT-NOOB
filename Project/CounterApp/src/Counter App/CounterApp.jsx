import React, { useState } from "react";
import "./CounterApp.css"

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <div className="counter-card-body">
          <h1 className="counter-title">Counter App</h1>
          <div className="counter-display">
            <h2 className="counter-value">{count}</h2>
            <div className="counter-buttons">
              <button className="btn btn-increment" onClick={() => setCount(count + 1)}>
                Increment
              </button>
              <button className="btn btn-reset" onClick={() => setCount(0)}>
                Reset
              </button>
              <button className="btn btn-decrement" onClick={() => setCount(count - 1)} disabled={count === 0}>
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;