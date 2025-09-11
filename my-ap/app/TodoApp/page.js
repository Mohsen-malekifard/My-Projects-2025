import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function TodoApp() {
  return(
    <div className = 'mt-10'>
      <TodoForm/>
      <TodoList/>
    </div>
  )
}
