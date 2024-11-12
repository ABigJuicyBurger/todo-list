import ProjectForm from "./ProjectForm";
import ProjectView from "./ProjectView";
import { useState } from "react";
import "./ProjectList.css";

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
    <div className="mainContainer">
      <h1>Project List</h1>
      <h2>
        {" "}
        A project made by{" "}
        <a href="https://github.com/ABigJuicyBurger">ABigJuicyBurger</a>
      </h2>
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
          <ul className="projectGroup">
            {projects.map((project) => {
              return (
                <li
                  onClick={() => {
                    return setSelectedProject(project);
                  }}
                  className="projectList"
                  key={project.id}
                >
                  {console.log("ProjectList: project id is", project.id)}
                  <h2>{project.title}</h2>
                  <p>Tasks: {project.todos.length}</p>
                  <p>
                    Next due:
                    {project.todos.length > 0
                      ? project.todos.reduce((a, b) => {
                          if (a.dueDate < b.dueDate) {
                            return a;
                          } else {
                            return b;
                          }
                        }).dueDate
                      : "No tasks"}
                  </p>
                  <input
                    type="checkbox"
                    className="delete-checkbox"
                    onChange={() => {
                      setSelectedProject(null);
                      onRemoveProject(project.id);
                    }}
                    checked={project.isCompleted}
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
        </>
      )}
    </div>
  );
}
export default ProjectList;
