"use client"
import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useTodo();

  return (
    <div className="max-w-md mx-auto mt-6 bg-white rounded-2xl shadow-lg p-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">My Todos</h2>

      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">No todos yet, add one!</p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
}
