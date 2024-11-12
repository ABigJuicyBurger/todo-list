import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ProjectList from "./ProjectList";
import { saveToLocalStorage, loadfromLocalStorage } from "./LocalStorage";

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

function App() {
  const [project, setProject] = useState(() => {
    const savedData = loadfromLocalStorage("projects");
    return savedData && Array.isArray(savedData) ? savedData : INITIAL_PROJECTS;
  });

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

  useEffect(() => {
    const savedData = loadfromLocalStorage("projects");
    console.log("Loading data (full):", JSON.stringify(savedData, null, 2));
    if (savedData && Array.isArray(savedData)) {
      setProject(savedData);
    }
  }, []);

  useEffect(() => {
    console.log("Saving data:", project);
    saveToLocalStorage("projects", project);
  }, [project]);

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
