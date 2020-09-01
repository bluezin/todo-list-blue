import React, { useState } from "react";
import "./Task.css";
import { Fab } from "@material-ui/core";
import App from "./App";

const Task = () => {
  const [todo, setTodo] = useState({
    iu: [],
    color: "",
    box: "",
  });

  const handleChange = (e) => {
    setTodo({
      box: e.target.value,
      iu: todo.iu,
      color: "",
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (todo.box !== "") {
      setTodo({
        iu: [todo.box, ...todo.iu],
        box: "",
        color: "blue",
      });
    }
  };

  const handleDelete = (id) => {
    setTodo({
      iu: todo.iu.filter((todo, index) => index !== id),
    });
  };

  return (
    <div className="App">
      <p>todo list</p>
      <form onSubmit={handleClick}>
        <input
          value={todo.box || ""}
          name="box"
          onChange={handleChange}
          placeholder="What do you need to do?"
        />

        <div className="mas" onClick={handleClick}>
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
        <App todo={todo} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Task;
