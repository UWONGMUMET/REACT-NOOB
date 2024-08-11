import React, { useState } from "react";
import "./app.css";
import Header from "./Header";
import Form from "./Form";
import Todolist from "./Todolist";

const TodoApptwo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="container">
        <div className="app-wraper">
            <Header></Header>
            <Form
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
            />
            <Todolist todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
    </div>
  );
};

export default TodoApptwo;