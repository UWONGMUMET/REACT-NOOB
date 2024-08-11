import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [editTodo, setInput]);

  const onInputChange = (e) => setInput(e.target.value);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    } else {
      setTodos(
        todos.map((todo) =>
          todo.id === editTodo.id ? { ...todo, title: input } : todo
        )
      );
      setEditTodo(null);
    }
    setInput("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editTodo ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default Form;
