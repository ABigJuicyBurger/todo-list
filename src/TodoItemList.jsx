import TodoForm from "./TodoForm";
import { useState } from "react";
import "./TodoItemList.css";

function TodoItemList({ todos, onAddTodo, onRemoveTodo, projectId }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="todo-list-container">
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className={`todo-item priority-${todo.priority}`}>
              <div className="todo-checkbox">
                <input
                  type="checkbox"
                  onChange={() => onRemoveTodo(projectId, todo.id)}
                  checked={todo.isCompleted}
                />
              </div>
              <div className="todo-content">
                <div className="todo-title">{todo.title}</div>
                <div className="todo-description">{todo.description}</div>
                <div className="todo-metadata">
                  <span>Due: {todo.dueDate}</span>
                  <span>Priority: {todo.priority}</span>
                </div>
              </div>
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
