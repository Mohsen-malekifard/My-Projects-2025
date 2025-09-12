"use client"
import { useState, createContext, useContext } from "react";



const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [Todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...Todos, {id : Date.now(), title : todo, complete : false}])
    }

    const deleteTodo = (id) => {
        setTodos(Todos.filter(todo => todo.id !== id))
    }

    const handleComplete = (id) => {
        setTodos(Todos.map(todo => todo.id == id ? {...todo, complete : !todo.complete} : todo))
    }

    return (
        <>
            <TodoContext.Provider value = {{Todos, addTodo, deleteTodo, handleComplete}}>
                {children}
            </TodoContext.Provider>
        </>
    )
}

export const useTodo = () => useContext(TodoContext)
