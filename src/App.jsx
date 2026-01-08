import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./features/todoSlice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const [todo, setTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 flex items-center justify-center px-4">
      
      {/* Glass Card */}
      <div className="w-full max-w-md backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl shadow-2xl p-6">

        <h1 className="text-3xl font-extrabold text-center text-white drop-shadow mb-6">
          ✨ Redux Toolkit
        </h1>

        {/* Input */}
        <form onSubmit={handleAddTodo} className="flex gap-2 mb-5">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Write something..."
            className="flex-1 px-4 py-2 rounded-xl bg-white/70 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="bg-white text-purple-600 font-semibold px-4 py-2 rounded-xl hover:scale-105 transition-transform duration-200"
          >
            Add
          </button>
        </form>

        {/* Counter */}
        <p className="text-sm text-white/80 mb-3 text-center">
          Total Todos: <span className="font-bold">{todos.length}</span>
        </p>

        {/* List */}
        <div className="space-y-3">
          {todos.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-4 py-2 rounded-xl bg-white/80 shadow hover:scale-[1.02] transition"
            >
              <span className="text-gray-800 font-medium">
                {item.text}
              </span>

              <button
                onClick={() => dispatch(removeTodo(item.id))}
                className="text-red-500 hover:text-red-600 font-semibold"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
