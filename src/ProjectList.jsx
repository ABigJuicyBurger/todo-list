import ProjectForm from "./ProjectForm";
import ProjectView from "./ProjectView";
import { useState } from "react";

function ProjectList({
  projects,
  onAddProject,
  onRemoveProject,
  onAddTodo,
  onRemoveTodo,
}) {
  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      <h1>Project List</h1>
      {selectedProject ? (
        <>
          <ProjectView
            project={projects.find((p) => p.id === selectedProject.id)}
            onAddTodo={onAddTodo}
            onRemoveTodo={onRemoveTodo}
          />
          <button onClick={() => setSelectedProject(null)}>
            Back to Projects
          </button>
        </>
      ) : (
        <>
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
                  <button
                    onClick={() => {
                      return setSelectedProject(project);
                    }}
                  >
                    View Project
                  </button>
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
        </>
      )}
    </div>
  );
}
export default ProjectList;
