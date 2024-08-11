import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    if (inputText.trim()) {
      addTodo(inputText);
      setInputText("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="Todo input"
      />
      <button className="add-btn" onClick={handleAdd} aria-label="Add todo">
        +
      </button>
    </div>
  );
};

export default TodoInput;
