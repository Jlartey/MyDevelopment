export default function Todo({ todo, toggleTodo }) {
  function handleClickTodo() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleClickTodo}
        />
        {todo.name}
      </label>
    </div>
  );
}
