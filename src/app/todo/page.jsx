"use client";

import { useState } from "react";
import { Input } from "../_components/Input";
import { Button } from "../_components/Button";
import { List } from "../_components/List";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");
  const HandleOnChange = (e) => {
    setNewTasks(e.target.value);
  };
  const HandleOnClicK = () => {
    setTasks([...tasks, newTasks]);
    setNewTasks("");
  };

  const handleDelete = (index) => {
    // console.log("init", index);
    const DeleteList = tasks.filter((task, i) => {
      return i != index;
    });
    setTasks(...[newTasks]);
  };

  const handleCheck = () => {
    console.log("check init");
  };

  return (
    <div className="flex justify-center pb-[594px] pt-15 bg-[#F3F4F6]">
      <div className="flex flex-col py-6 px-4 items-center rounded-[6px] bg-[#FFF]">
        <h2 className="text-[20px] font-[600] ">To-Do list</h2>
        <div className="flex py-5 gap-1.5 ">
          <input
            type="text"
            value={newTasks}
            placeholder=" Add a new task..."
            onChange={HandleOnChange}
            className="border-2"
          ></input>
          <Button HandleOnClicK={HandleOnClicK} />
        </div>
        <div className="flex gap-3 flex-col">
          {tasks.map((task, index) => {
            return (
              <div className="bg-gray-300 h-[62px] w-[345px] rounded-[6px] flex justify-between p-4">
                <div className="flex items-center gap-2.5">
                  <input type="checkbox" onChange={handleCheck} />
                  <p key={index}>{task}</p>
                </div>
                <button onClick={() => handleDelete(index)}>delete</button>
              </div>
            );
          })}
        </div>

        <div className="flex gap-2.5 ">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
    </div>
  );
}
