"use client"
import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([]);

    const AddTodo = (todo) => {
        setTodos([...todos, {id : Date.now(), text : todo, complete : false}])
    }

    const handleDelete = (id) => {
        setTodos(todos.filter(t => t.id !== id))
    }

    const handleComplete = (id) => {
        setTodos(todos.map(todo => todo.id == id ? {...todo, complete : !todo.complete} : todo))
    }

    return (
        <>
            <TodoContext.Provider value = {{todos, AddTodo, handleDelete, handleComplete}} >
                {children}
            </TodoContext.Provider>
        </>
    )
}

export const useTodo = () => useContext(TodoContext)