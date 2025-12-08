"use client";

import { useState } from "react";
import { Button } from "./_components/Button";

export default function Todo() {
  // const [tasks, setTasks] = useState([
  //   { id: 1, text: "make to do", completed: false },
  //   { id: 2, text: "do not make to do", completed: true },
  // ]);
  // const [newTask, setNewTask] = useState(""); // renamed for clarity
  const [filter, setFilter] = useState("all");

  // Add new task
  // const handleAddTask = () => {
  //   if (newTask.trim() === "") return; // don't add empty tasks

  //   const newTaskObj = {
  //     id: Date.now(), // simple unique ID
  //     text: newTask.trim(),
  //     completed: false,
  //   };
  //   setTasks([...tasks, newTaskObj]);
  //   setNewTask(""); // clear input
  // };

  // Toggle complete
  // const handleToggle = (id) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, completed: !task.completed } : task
  //     )
  //   );
  // };

  // Delete task
  // const handleDelete = (id) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

  // Filtered tasks
  // const filteredTasks = tasks.filter((task) => {
  //   if (filter === "active") return !task.completed;
  //   if (filter === "completed") return task.completed;
  //   return true; // "all"
  // });

  return (
    <div className="flex justify-center h-screen items-center bg-[#F3F4F6]">
      <div className="flex flex-col py-6 px-10 items-center rounded-lg bg-gray-200 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6">To-Do List</h2>

        {/* Add Task Input */}
        <div className="flex gap-3 mb-6 w-full">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
            placeholder="Add a new task..."
            className="flex-1 border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          <button onClick={handleAddTask}>Add</button>
          {/* <Button onClick={handleAddTask}>Add</Button> */}
        </div>

        {/* Task List */}
        <div className="w-full space-y-3 mb-6">
          {filteredTasks.map((task) => (
            <div
              key={task.id} // NEVER use index as key!
              className={`flex items-center justify-between p-4 rounded-lg bg-gray-300 ${
                task.completed ? "opacity-70" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggle(task.id)}
                  className="w-5 h-5 cursor-pointer"
                />
                <p
                  className={task.completed ? "line-through text-gray-600" : ""}
                >
                  {task.text}
                </p>
              </div>
              <button
                onClick={() => handleDelete(task.id)}
                className="px-4 py-2 text-red-600 border-2 border-red-400 rounded hover:bg-red-500 hover:text-white font-medium transition"
              >
                Delete
              </button>
            </div>
          ))}
          {filteredTasks.length === 0 && (
            <p className="text-center text-gray-500 py-8">
              {filter === "all" ? "No tasks yet!" : `No ${filter} tasks`}
            </p>
          )}
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3">
          {["all", "active", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded font-medium border-2 transition ${
                filter === f
                  ? "bg-amber-500 text-white border-amber-600"
                  : "border-amber-400 text-amber-600 hover:bg-amber-100"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500">
            Powered by{" "}
            <span className="text-blue-600 font-semibold">
              Pinecone Academy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
