"use client";

import { useState } from "react";
import { Button } from "./_components/Button";

export default function Todo() {
  const [tasks, setTasks] = useState([
    { text: "make to do", isCompleted: false },
    { text: "do not make to do", completed: true },
  ]);
  const [newTasks, setNewTasks] = useState("");
  const [filter, setFilter] = useState("all");

  // input
  const HandleOnChange = (e) => {
    setNewTasks(e.target.value);
  };

  // add button
  const HandleOnClicK = () => {
    if (newTasks.trim() === "") return;
    const task = { isCompleted: false, text: newTasks };
    setTasks([...tasks, task]);
    setNewTasks("");
  };

  //delete button
  const HandleDelete = (index) => {
    const taskDelete = tasks.filter((task, i) => {
      return i != index;
    });
    setTasks(taskDelete);
  };
  const handleCheck = (index) => {
    console.log("index catching", index);
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, isCompleted: !task.isCompleted } : task
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
          {tasks.map((task, index) => {
            return (
              <div
                key={index}
                className="bg-gray-300 h-[62px] w-[345px] rounded-[6px] flex justify-between p-4"
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    defaultChecked={task.isCompleted}
                    onClick={() => handleCheck(index)}
                  />
                  <p className={task.isCompleted ? "line-through" : ""}>
                    {task.text}
                  </p>
                  {/* className={task.completed ? "line-through text-gray-600" : ""} */}
                </div>
                <button
                  className="rounded font-semibold border-2 cursor-pointer hover:bg-red-200 hover:text-white border-red-400 text-red-500 text-l flex items-center py-2 px-2"
                  onClick={() => HandleDelete(index)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex gap-2.5 py-4">
          <button className="border-2 font-semibold hover:bg-amber-200 hover:text-white cursor-pointer transition-all duration-600 border-amber-400 text-amber-500 rounded py-1 px-2">
            All
          </button>
          <button className="border-2 font-semibold hover:bg-amber-200 hover:text-white cursor-pointer transition-all duration-600 border-amber-400 text-amber-500 rounded px-2">
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className="border-2 font-semibold hover:bg-amber-200 hover:text-white cursor-pointer transition-all duration-600 border-amber-400 text-amber-500 rounded px-2"
          >
            Completed
          </button>
        </div>
        <div className="flex gap-1">
          <p className="text-[#6B7280]">Powered by</p>
          <p className="text-[#3B73ED]">Pinecone academy</p>
        </div>
      </div>
    </div>
  );
}
