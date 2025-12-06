"use client";

import { useState } from "react";
// import { Trash2, Plus } from "lucide-react";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn Next.js", completed: false },
    { id: 2, text: "Build a quiz app", completed: true },
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    // Only allow delete if task is completed
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        My To-Do List
      </h1>

      {/* Add new task */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {/* <Plus className="w-5 h-5" /> */}
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            No tasks yet. Add one!
          </p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center gap-3 p-4 rounded-lg border transition-all
                ${
                  task.completed
                    ? "bg-gray-100 border-gray-300"
                    : "bg-white border-gray-200 hover:border-gray-400"
                }`}
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
              />

              {/* Task Text */}
              <span
                className={`flex-1 text-lg ${
                  task.completed
                    ? "line-through text-gray-500"
                    : "text-gray-800"
                }`}
              >
                {task.text}
              </span>

              {/* Delete Button - Only visible when checked */}
              {task.completed && (
                <button
                  onClick={() => deleteTask(task.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                  title="Delete completed task"
                >
                  {/* <Trash2 className="w-5 h-5" /> */}
                </button>
              )}
            </div>
          ))
        )}
      </div>

      {/* Summary */}
      <div className="mt-8 text-center text-sm text-gray-600">
        {tasks.filter((t) => !t.completed).length} active •{" "}
        {tasks.filter((t) => t.completed).length} completed
      </div>
    </div>
  );
}
