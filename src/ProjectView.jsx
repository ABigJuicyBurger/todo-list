import TodoItemList from "./TodoItemList";

function ProjectView({ project, onAddTodo, onRemoveTodo }) {
  return (
    <div>
      <h1>{project.title}</h1>

      <TodoItemList
        todos={project.todos}
        onAddTodo={onAddTodo}
        onRemoveTodo={onRemoveTodo}
        projectId={project.id}
      />
    </div>
  );
}

export default ProjectView;
