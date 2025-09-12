"use client"
import { useTodo } from "../context/TodoContext"


export default function TodoItem ({todo}) {
    const {deleteTodo, handleComplete} = useTodo();

    return(
        <div className = "my-2 text-black flex flex-row p-2 bg-grey-400 border-1 rounded-lg justify-between">
            <h1 className = {`${todo.complete && "line-through"} my-auto`}>{todo.title}</h1>
            <div className = "flex flex-row gap-4">
                <button className = "bg-red-600 p-3 rounded-lg text-white" onClick = {() => deleteTodo(todo.id)} >Delete</button>
                <button className = {`${todo.complete ? "bg-yellow-600 text-white" : "bg-green-600 text-white"} p-3 rounded-lg`} onClick = {() => handleComplete(todo.id)}>{todo.complete ? "Undo" : "Done"}</button>
            </div>
        </div>
    )
}
