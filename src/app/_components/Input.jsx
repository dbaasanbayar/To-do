"use client";
import {useState} from "react";
import {Button} from "../_components/Button"

export function TaskInput() {
    
    const [tasks, setTasks] = useState([])
    const [newtasks, setNewTasks] = useState([])
    const HandleOnChange = (e) =>{
        setTasks([...tasks, e.target.value]);
        console.log("typing" , e.target.value);
    }

    return ( <div>
        <div>
    <input 
        type="text"
        onChange={HandleOnChange}
        className="border-2 ">
        </input>
        <Button>Add</Button>

        </div>
        <Button>completed</Button>
        {
            tasks.map((task) => {
                return  <div>{task}</div>
            })
        }

    </div>)

}

