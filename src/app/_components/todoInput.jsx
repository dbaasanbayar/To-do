"use client";
import {useState} from "react";

export function Add() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("")
    
    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleOnClick = () =>{
        setTasks([...tasks, inputValue]);
        setInputValue("");
        console.log(inputValue);
    };
   

return ( <div>
        <div className="flex gap-1.5">
        <input 
        className="border-2 rounded-[6px]"
        type="text" 
        placeholder=" Add a new task..." 
        onChange={handleOnChange}
        value={inputValue}
        />
        <button onClick={handleOnClick} className="w-[59px] h-[40px] bg-[#3C82F6] rounded-[6px]">Add</button>
    </div>
    
        {tasks.map((inputValue, index)=> {
        return <div key = {index }>{inputValue}</div>
    })}
     

        </div>
       
    
);
}
