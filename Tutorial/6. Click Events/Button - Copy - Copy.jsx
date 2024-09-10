import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  const handleClick = (event) => {
    if (count < 4) {
      setCount(count + 1);
      event.target.textContent = `Clicked ${count + 1} times, stop clicking me!`;
    } else {
      event.target.textContent = "STOP CLICKING ME!";
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default Button;