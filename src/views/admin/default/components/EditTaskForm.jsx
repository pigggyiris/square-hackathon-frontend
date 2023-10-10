import React, { useState } from "react";
import CustomButton from "./CustomButton";

export const EditTaskForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return; // Prevent empty tasks
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <div className="mt-5 flex">
        <input
          type="text"
          className="todo-input w-full rounded border border-fall-800 px-3"
          value={value}
          placeholder="Update Task"
          onChange={(e) => setValue(e.target.value)}
        />
        <CustomButton label="Update" onClick={handleSubmit} />
      </div>
    </form>
  );
};
