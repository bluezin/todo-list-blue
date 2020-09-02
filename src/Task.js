import React, { useState } from "react";
import "./Task.css";
import { Fab } from "@material-ui/core";
import App from "./App";

const Task = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  function handleChange(event) {
    setTodo(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo === "") return;

    const newTodo = {
      text: todo,
      id: Date.now(),
    };

    setTodoList([newTodo, ...todoList]);
    setTodo("");
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <p>todo list</p>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          name="box"
          onChange={handleChange}
          placeholder="What do you need to do?"
        />

        <div className="mas" onClick={handleSubmit}>
          <Fab
            color="primary"
            aria-label="add"
            style={{
              fontSize: 30,
              color: "black",
              background: "rgb(0, 0, 0, 0.4)",
              position: "relative",
              right: 120,
            }}
          >
            +
          </Fab>
        </div>
      </form>

      <div>
        <App todoList={todoList} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Task;
