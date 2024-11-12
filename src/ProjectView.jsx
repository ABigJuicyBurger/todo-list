import TodoItemList from "./TodoItemList";
import "./ProjectView.css";

function ProjectView({ project, onAddTodo, onRemoveTodo }) {
  return (
    <div className="project-card">
      <div ClassName="project-content">
        <h1>{project.title}</h1>

        <TodoItemList
          todos={project.todos}
          onAddTodo={onAddTodo}
          onRemoveTodo={onRemoveTodo}
          projectId={project.id}
        />
      </div>
    </div>
  );
}

export default ProjectView;
