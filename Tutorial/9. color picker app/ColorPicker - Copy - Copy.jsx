import React, { useState } from "react";
import '../9. color picker app/cp.css'

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <dic className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </dic>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handleColorChange}/>
    </div>
  );
};

export default ColorPicker;
