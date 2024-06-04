import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import TodoList from "./TodoList";

const LOCAL_STORAGE_KEY = "todoApp.todos";

export default function App() {
  const [todos, setTodos] = useState([]);
  const inputNameRef = useRef();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  function handleAddTodo() {
    const name = inputNameRef.current.value;
    if (name === "") return;
    setTodos([...todos, { id: nanoid(), name: name, complete: false }]);
    inputNameRef.current.value = null;
  }

  function toggleTodo(id) {
    const newTodos = todos.slice();
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function clearCompletedTodos() {
    const newTodos = todos.filter((todo) => todo.complete === false);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={inputNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={clearCompletedTodos}>Clear Completed</button>
      <div>
        You have {todos.filter((todo) => todo.complete === false).length} tasks
        to do
      </div>
    </>
  );
}
