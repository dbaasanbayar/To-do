"use client";
import {useState} from "react";

export default function Add() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("")
    
    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleOnClick = () =>{
        setTasks([...tasks, inputValue]);
        setInputValue = ("");
    }

return (
    <div>
        <input 
        type="text" 
        placeholder="Add a new task..." 
        onChange={handleOnChange}
        value={inputValue}
        />
        {tasks.map((el, index) => {
            return <div key={index}>{el}</div>
        })}
        <button onClick={handleOnClick } className="w-[59px] h-[40px] bg-[#3C82F6] rounded-[6px]">Add</button>
    </div>)
}