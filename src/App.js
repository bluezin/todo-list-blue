import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import "./Task.css";

const App = ({ todoList, handleDelete }) => {
  return (
    <>
      {todoList.length === 0 ? (
        <p className="cantidad">Add a task</p>
      ) : (
        <p className="cantidad">You have {todoList.length} taks to do</p>
      )}

      <ul>
        {todoList.map(({ id, text }) => (
          <li key={id} className="contenedor">
            <div className="div">
              <CheckCircleIcon
                style={{
                  fontSize: 30,
                  float: "left",
                  color: "rgb(86, 86, 243)",
                }}
              />
              {text}
              <DeleteOutlineIcon
                style={{ float: "right" }}
                onClick={() => handleDelete(id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
