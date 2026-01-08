import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./features/todoSlice";
import { addUserInfo, removeUserInfo } from "./features/userSlice"; // Dono actions import kiye

function App() {
  const dispatch = useDispatch();
  
  // Dono slices se data nikala
  const todos = useSelector((state) => state.todos.todos);
  const users = useSelector((state) => state.userInfo.userInfo);

  // Dono inputs ke liye alag state
  const [todo, setTodo] = useState("");
  const [user, setUser] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (user.trim()) {
      dispatch(addUserInfo(user));
      setUser("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 flex items-center justify-center px-4 py-10">
      
      {/* Main Glass Card */}
      <div className="w-full max-w-md backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl shadow-2xl p-6">

        <h1 className="text-3xl font-extrabold text-center text-white drop-shadow mb-6">
          ✨ Redux Dashboard
        </h1>

        {/* --- TODO SECTION --- */}
        <section className="mb-8">
          <h2 className="text-white font-bold mb-3 border-b border-white/20 pb-1">Manage Todos</h2>
          <form onSubmit={handleAddTodo} className="flex gap-2 mb-4">
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Add a task..."
              className="flex-1 px-4 py-2 rounded-xl bg-white/70 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-purple-600 font-semibold px-4 py-2 rounded-xl hover:scale-105 transition"
            >
              Add
            </button>
          </form>

          <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
            {todos.map((item) => (
              <div key={item.id} className="flex items-center justify-between px-4 py-2 rounded-xl bg-white/80 shadow">
                <span className="text-gray-800 text-sm">{item.text}</span>
                <button onClick={() => dispatch(removeTodo(item.id))} className="text-red-500 text-xs font-bold hover:scale-110">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* --- USER SECTION --- */}
        <section>
          <h2 className="text-white font-bold mb-3 border-b border-white/20 pb-1">User Profiles</h2>
          <form onSubmit={handleAddUser} className="flex gap-2 mb-4">
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Add user name..."
              className="flex-1 px-4 py-2 rounded-xl bg-white/70 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-xl hover:scale-105 transition"
            >
              Add
            </button>
          </form>

          <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
            {users.map((item) => (
              <div key={item.id} className="flex items-center justify-between px-4 py-2 rounded-xl bg-indigo-100/90 shadow">
                <span className="text-indigo-900 text-sm font-medium">{item.text}</span>
                <button onClick={() => dispatch(removeUserInfo(item.id))} className="text-red-500 text-xs font-bold">
                  Remove
                </button>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;