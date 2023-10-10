import React from "react";
import Checkbox from "components/checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const Task = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo mt-5 flex items-center justify-between">
      <div className="flex items-center">
        <Checkbox color="fall" onChange={() => toggleComplete(task.id)} />
        <p
          className={`ml-2 text-fall-800 ${
            task.completed ? "line-through" : ""
          }`}
        >
          {task.task}
        </p>
      </div>
      <div className="flex items-center text-fall-800">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="mr-2"
          style={{ cursor: "pointer" }}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          style={{ cursor: "pointer" }}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
