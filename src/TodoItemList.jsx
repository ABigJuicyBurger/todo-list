import TodoForm from "./TodoForm";
import { useState } from "react";

function TodoItemList({ todos, onAddTodo, onRemoveTodo, projectId }) {
  console.log("TodoItemList projectId:", projectId);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                onChange={() => onRemoveTodo(projectId, todo.id)}
                checked={todo.isCompleted}
              />
              {todo.title}
              {todo.description}
              {todo.dueDate}
              {todo.priority}
              {todo.notes}
              {todo.isCompleted}
            </li>
          );
        })}
      </ul>
      {!showForm && <button onClick={() => setShowForm(true)}>Add Todo</button>}
      {showForm && (
        <TodoForm
          projectId={projectId}
          onAddTodo={onAddTodo}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
export default TodoItemList;
