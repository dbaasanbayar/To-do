"use client";

import { useState } from "react";
import { Button } from "./_components/Button";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");

  // input
  const HandleOnChange = (e) => {
    setNewTasks(e.target.value);
  };

  // add button
  const HandleOnClicK = () => {
    const taskGen = { isCompleted: false, text: newTasks };
    setTasks([...tasks, taskGen]);
    setNewTasks("");
  };

  //delete button
  const HandleDelete = (index) => {
    const taskDelete = tasks.filter((taskGen, i) => {
      return i != index;
    });
    setTasks(taskDelete);
  };

  //filter active
  const handleActive = (index) => {
    const taskActive = tasks.filter((taskGen, index) => !taskGen.isCompleted);
  };
  //filter completed
  const handleCompleted = (index) => {
    const taskCompleted = tasks.filter((taskGen, index) => taskGen.isCompleted);
    return taskCompleted;
  };

  const handleCheck = () => {};

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
            className="border-2 rounded px-2"
          />
          <Button HandleOnClicK={HandleOnClicK} />
        </div>
        <div className="flex gap-3 flex-col">
          {tasks.map((taskGen, index) => {
            return (
              <div
                key={index}
                className="bg-gray-300 h-[62px] w-[345px] rounded-[6px] flex justify-between p-4"
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    onChange={handleCheck(index)}
                    defaultChecked={taskGen.isCompleted}
                  />
                  <p>{taskGen.text}</p>
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
          <button
            onClick={handleActive}
            className="border-2 font-semibold hover:bg-amber-200 hover:text-white cursor-pointer transition-all duration-600 border-amber-400 text-amber-500 rounded px-2"
          >
            Active
          </button>
          <button
            onClick={handleCompleted}
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
