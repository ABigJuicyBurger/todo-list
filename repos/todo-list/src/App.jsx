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
          completed: false,
        },
        {
          id: uuidv4(),
          title: "Todo 2",
          isCompleted: false,
        },
      ],
    },
  ];

  const [project, setProject] = useState(INITIAL_PROJECTS);

  const addProject = (newProject) => {
    setProject([...project, newProject]);
  };

  return (
    // <header>
    //   <Header />
    // </header>
    <div>
      <ProjectList projects={project} onAddProject={addProject} />
    </div>
  );
}

export default App;
