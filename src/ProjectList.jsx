import ProjectForm from "./ProjectForm";
import TodoItemList from "./TodoItemList";
import { useState } from "react";

function ProjectList({
  projects,
  onAddProject,
  onRemoveProject,
  onAddTodo,
  onRemoveTodo,
}) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1>Project List</h1>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <input
                type="checkbox"
                onChange={() => onRemoveProject(project.id)}
                checked={project.isCompleted}
              />
              {console.log("ProjectList: project id is", project.id)}
              {project.title}
              <TodoItemList
                projectId={project.id}
                onAddTodo={onAddTodo}
                onRemoveTodo={onRemoveTodo}
                todos={project.todos}
              />
            </li>
          );
        })}
      </ul>
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Add Project</button>
      )}
      {showForm && (
        <ProjectForm
          onAddProject={onAddProject}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
export default ProjectList;
