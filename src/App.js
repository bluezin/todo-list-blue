import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import "./Task.css";

const App = ({ todoList, handleDelete, handleCheck }) => {
  return (
    <>
      {todoList.length === 0 ? (
        <p className="cantidad">Add a task</p>
      ) : (
        <p className="cantidad">You have {todoList.length} task to do</p>
      )}

      <ul>
        {todoList.map(({ id, text, completed }) => (
          <div key={id}>
            {completed ? (
              <li key={id} className="contenedor color" id="li">
                <div className="div">
                  <CheckCircleIcon
                    style={{
                      fontSize: 30,
                      float: "left",
                      color: completed ? "white" : "rgb(86, 86, 243)",
                    }}
                    onClick={() => handleCheck(id)}
                  />
                  {text}
                  <DeleteOutlineIcon
                    style={{ float: "right" }}
                    onClick={() => handleDelete(id)}
                  />
                </div>
              </li>
            ) : (
              <li key={id} className="contenedor" id="li">
                <div className="div">
                  <CheckCircleIcon
                    style={{
                      fontSize: 30,
                      float: "left",
                      color: completed ? "white" : "rgb(86, 86, 243)",
                    }}
                    onClick={() => handleCheck(id)}
                  />
                  {text}
                  <DeleteOutlineIcon
                    style={{ float: "right" }}
                    onClick={() => handleDelete(id)}
                  />
                </div>
              </li>
            )}
          </div>
        ))}
      </ul>
    </>
  );
};

export default App;
