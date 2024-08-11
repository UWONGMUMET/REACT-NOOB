import React from "react";

const Todolist = ({ todos, setTodos, setEditTodo }) => {
  const handleDelete = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const handleComplete = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  return (
    <ul>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <span className={`list ${todo.completed ? "completed" : ""}`}>
            {todo.title}
          </span>
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo.id)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => setEditTodo(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo.id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
