"use client";
import { useState } from "react";
const Home = () => {
  const [todos, setTodos] = useState([
    "todo-1",
    "todo-2",
    "todo-3",
    "todo-4",
    "todo-5",
  ]);
  const handleDelete = (index) => {
    console.log("working init", index);
    const testArr = todos.filter((todo, i) => {
      return i != index;
    });
    setTodos(testArr);
    console.log(testArr);
  };
  const handleUpdate = (index) => {
    const testArr = todos.map((todo, i) => {
      if (i == index) {
        todo = "hi untaach";
      }
      return todo;
    });
    setTodos(testArr);
  };

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <p className="flex gap-2" key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>x</button>
            <button onClick={() => handleUpdate(index)}>y</button>
          </p>
        );
      })}
    </div>
  );
};

export default Home;
