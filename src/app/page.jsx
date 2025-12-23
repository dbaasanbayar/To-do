"use client";

import { useEffect, useState } from "react";
import { Button } from "./_components/Button";

export default function Todo() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTasks, setNewTasks] = useState("");
  const [filter, setFilter] = useState("all");

  // input
  const HandleOnChange = (e) => {
    setNewTasks(e.target.value);
  };

  // add button
  const HandleOnClicK = () => {
    if (newTasks.trim() === "") return;
    const task = { id: Date.now(), isCompleted: false, text: newTasks };
    setTasks([...tasks, task]);
    setNewTasks("");
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //delete button
  const HandleDelete = (id) => {
    const taskDelete = tasks.filter((task) => {
      return task.id != id;
    });
    setTasks(taskDelete);
  };
  const handleCheck = (id) => {
    console.log("index catching", id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const filterHandler = tasks.filter((task) => {
    if (filter === "active") return !task.isCompleted;
    if (filter === "completed") return task.isCompleted;
    else return true;
  });
  return (
    <div className="flex justify-center h-screen max-full items-center bg-[#F3F4F6]">
      <div className="flex flex-col py-6 px-10 items-center rounded-[6px] bg-gray-200">
        <h2 className="text-[30px] font-semibold ">To-Do list</h2>
        <div className="flex py-5 gap-3">
          <input
            type="text"
            value={newTasks}
            placeholder="Add a new task..."
            onChange={HandleOnChange}
            onKeyDown={(e) => e.key === "Enter" && HandleOnClicK()}
            className="border-2 rounded px-2"
          />
          <Button HandleOnClicK={HandleOnClicK} />
        </div>
        <div className="flex gap-3 flex-col">
          {filterHandler.map((task) => {
            return (
              <div
                key={task.id}
                className="bg-gray-300 h-[62px] w-[345px] rounded-[6px] flex justify-between p-4"
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    defaultChecked={task.isCompleted}
                    onClick={() => handleCheck(task.id)}
                  />
                  <p className={task.isCompleted ? "line-through" : ""}>
                    {task.text}
                  </p>
                </div>
                <button
                  className="rounded font-semibold border-2 cursor-pointer hover:bg-red-200 hover:text-white border-red-400 text-red-500 text-l flex items-center py-2 px-2"
                  onClick={() => HandleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
          {tasks.length === 0 && (
            <p className="text-center text-gray-500 py-8">
              {filter === "all" ? "No tasks yet!" : `${filter}`}
            </p>
          )}
        </div>

        <div className="flex gap-2.5 py-4">
          {["all", "active", "completed"].map((f, i) => (
            <button
              key={i}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded font-medium border-2 transition ${
                filter === f
                  ? "bg-amber-500 text-white border-amber-600" // Active state
                  : "border-amber-400 text-amber-600 hover:bg-amber-100" // Inactive state
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex gap-1">
          <p className="text-[#6B7280]">Powered by</p>
          <p className="text-[#3B73ED]">Pinecone academy</p>
        </div>
      </div>
    </div>
  );
}
