"use client"
import { useTodo } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { handleDelete, handleComplete } = useTodo();

  return (
    <li className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
      {/* متن تسک */}
      <span
        className={`text-base ${
          todo.complete ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {todo.text}
      </span>

      {/* دکمه‌ها */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleComplete(todo.id)}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
            todo.complete
              ? "bg-yellow-400 hover:bg-yellow-500 text-white"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          {todo.complete ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => handleDelete(todo.id)}
          className="px-3 py-1 rounded-lg text-sm font-medium bg-red-500 hover:bg-red-600 text-white transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
