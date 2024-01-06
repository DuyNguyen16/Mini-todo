import React, { createContext, useState } from "react";
import EncryptButton from "./Example";

export const mainContext = createContext();

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
    console.log("remove");
  };
  let context = {
    todos,
    setTodos,
    input,
    setInput,
  };
  return (
    <div className="flex items-center h-full justify-center flex-col">
      <div className="text-[2rem] pb-5">Todo List</div>
      <div className="bg-[#cac8c8] flex flex-col justify-center px-5 py-12 rounded-md">
        <div className="flex items-center justify-center w-full">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="New Todo"
            className="text-black px-2 py-2 rounded-md mr-2"
          ></input>
          <mainContext.Provider value={context}>
            <EncryptButton />
          </mainContext.Provider>
        </div>
        <div className="flex items-center justify-center w-full">
          <ul className="w-full flex justify-center flex-col">
            {todos.map(({ text, id }) => (
              <li key={id} className="w-full flex justify-between py-3">
                <span className="text-black">{text}</span>
                <button onClick={() => removeTodo(id)} className="text-red-600 font-bold">X</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
