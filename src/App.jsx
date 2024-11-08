import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ProjectList from "./ProjectList";

function App() {
  const INITIAL_PROJECTS = [
    {
      id: uuidv4(),
      title: "Project 1",
      isCompleted: false,
      todos: [
        {
          id: uuidv4(),
          title: "Todo 1",
          description: "Description 1",
          dueDate: "2023-07-20",
          priority: "High",
          notes: "Notes 1",
          isCompleted: false,
        },
      ],
    },
  ];

  const [project, setProject] = useState(INITIAL_PROJECTS);

  const addProject = (newProject) => {
    setProject([...project, newProject]);
  };

  const addTodo = (projectId, newTodo) => {
    console.log("App: adding todo", { projectId, newTodo });
    setProject(
      project.map((p) => {
        if (p.id === projectId) {
          return {
            ...p,
            todos: [...p.todos, newTodo],
          };
        }
        return p;
      })
    );
  };

  const removeTodo = (projectId, todoId) => {
    console.log("App: removing todo", { projectId, todoId });
    setProject(
      project.map((p) => {
        if (p.id === projectId) {
          return {
            ...p,
            todos: p.todos.filter((t) => t.id !== todoId),
          };
        }
        return p;
      })
    );
  };

  const removeProject = (projectId) => {
    console.log("App: removing project", { projectId });
    setProject(project.filter((p) => p.id !== projectId));
  };

  return (
    // <header>
    //   <Header />
    // </header>
    <div>
      <ProjectList
        projects={project}
        onAddProject={addProject}
        onRemoveProject={removeProject}
        onAddTodo={addTodo}
        onRemoveTodo={removeTodo}
      />
    </div>
  );
}

export default App;
