import React from "react";

const TodoList = ({ item, index, deleteTodo }) => {
  return (
    <li className="list-item">
      {item}
      <span className="icons">
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={() => deleteTodo(index)}
          aria-label={`Delete todo ${item}`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && deleteTodo(index)}
        >
          -
        </i>
      </span>
    </li>
  );
};

export default TodoList;
