import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import '../ToDoApp1/TodoAppStyle.css';

const ProjectTodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (inputText) => {
    setTodos([...todos, inputText]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <h1 className="app-heading">TODO</h1>
        <TodoInput addTodo={addTodo} />
        <hr />
        <ul>
          {todos.map((todo, i) => (
            <TodoList
              key={i}
              index={i}
              item={todo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectTodoApp;
