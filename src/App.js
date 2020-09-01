import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CancelIcon from "@material-ui/icons/Cancel";
import "./Task.css";

const App = ({ todo, handleDelete }) => {
  return (
    <>
      {todo.iu.length === 0 ? (
        <p className="cantidad">Add a task</p>
      ) : (
        <p className="cantidad">You have {todo.iu.length} taks to do</p>
      )}

      {todo.iu.map((task, id) => (
        <ul key={id} id="li">
          {task.length === 0 ? null : (
            <li className="contenedor" id="li_li">
              <div className="div">
                <CheckCircleIcon
                  style={{
                    fontSize: 30,
                    float: "left",
                    color: "rgb(86, 86, 243)",
                  }}
                  onClick={() => {
                    {
                      task.color === "blue"
                        ? console.log("d")
                        : console.log("w");
                    }
                    // return console.log()
                  }}
                />

                <CancelIcon
                  style={{ fontSize: 30, color: "#f05252", float: "left" }}
                  onClick={() => {
                    let conjunto = document.getElementById("li_li");
                    conjunto.style.color = "red";
                    return conjunto;
                  }}
                />
                {task}
                <DeleteOutlineIcon
                  style={{ float: "right" }}
                  onClick={() => handleDelete(id)}
                />
              </div>
            </li>
          )}
        </ul>
      ))}
    </>
  );
};

export default App;
