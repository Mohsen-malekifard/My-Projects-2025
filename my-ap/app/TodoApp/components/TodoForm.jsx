"use client"
import { useTodo } from "../context/TodoContext";
import { useState } from "react";

export default function TodoForm() {
  const { AddTodo } = useTodo();
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    AddTodo(title);
    setTitle("");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center gap-3 bg-white shadow-md rounded-2xl p-4 max-w-md mx-auto"
    >
      <input
        type="text"
        placeholder="Enter your todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      />
      <button 
        type="submit" 
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-xl shadow transition duration-200"
      >
        Add
      </button>
    </form>
  );
}
