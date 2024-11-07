import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ProjectList from "./ProjectList";

function App() {
  const INITIAL_PROJECTS = [
    {
      id: uuidv4(),
      title: "Project 1",
      todos: [
        {
          id: uuidv4(),
          title: "Todo 1",
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

  return (
    // <header>
    //   <Header />
    // </header>
    <div>
      <ProjectList
        projects={project}
        onAddProject={addProject}
        onAddTodo={addTodo}
      />
    </div>
  );
}

export default App;
