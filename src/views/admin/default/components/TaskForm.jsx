import React, { useState } from "react";
import CustomButton from "./CustomButton";

export const TaskForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return; // Prevent empty tasks
    addTodo(value);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <div className="flex mt-5">
        <input
          type="text"
          className="todo-input w-full border border-fall-700 px-3 rounded text-fall-700"
          value={value}
          placeholder="Add a new task?"
          onChange={(e) => setValue(e.target.value)}
        />
        <CustomButton label="Add" onClick={handleSubmit} />
      </div>
    </form>
  );
};
