import { MdCheckCircle } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TaskForm } from "./TaskForm";
import { Task } from "./Task";
import Card from "components/card";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EditTaskForm } from "./EditTaskForm";

const ITEMS_PER_PAGE = 12;

const TaskCard = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const displayedTodos = todos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Card extra="pb-7 p-[20px]">
      {/* task header */}
      <div className="relative flex flex-row justify-between">
        <div className="flex items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-fall-50 dark:bg-indigo-100 dark:bg-white/5">
            <MdCheckCircle className="h-6 w-6 text-fall-700 dark:text-white" />
          </div>
          <h4 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">
            To Do List
          </h4>
        </div>
      </div>

      <div className="mt-3 text-gray-600 dark:text-white">
        <h1>{`${completedCount} of ${totalCount} remaining`}</h1>
      </div>
      {/* task content */}
      <div>
        {displayedTodos.map((todo) =>
          todo.isEditing ? (
            <EditTaskForm editTodo={editTask} task={todo} />
          ) : (
            <Task
              task={todo}
              key={todo.id}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
        <TaskForm addTodo={addTodo} />
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <IoIosArrowBack
              size={20}
              color={currentPage === 1 ? "#aaaaaa" : "#5a462d"}
            />
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <IoIosArrowForward
              size={20}
              color={currentPage === totalPages ? "#aaaaaa" : "#5a462d"}
            />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
