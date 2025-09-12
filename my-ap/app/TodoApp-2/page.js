"use client"
import { useTodo } from "./context/TodoContext";
import {useState} from "react"
import TodoItem from "./components/TodoItem";

export default function Home () {
    const {addTodo, Todos} = useTodo();
    const [input, setInput] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(input)
    }

    return(
        <div className = "flex flex-col bg-white rounded-lg text-black font-bold p-11 max-w-120 mx-auto mt-10">
            <form className = "flex flex-col gap-5" onSubmit = {handleSubmit} >
                <input placeholder = "Enter your Todo Title..." className = " border-1 focus:ring-4 focus:ring-blue-600 p-3 rounded-lg" onChange = {(e) => setInput(e.target.value)} />
                <button className = "text-white bg-blue-600 p-3 rounded-sm" type = 'submit' >Add</button>    
            </form>
            <h1 className = "text-center mt-6">Todos</h1>
            {Todos.map(todo => <TodoItem key = {todo.id} todo = {todo} />)}
        </div>
    )
}
