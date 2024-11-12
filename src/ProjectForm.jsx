import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./ProjectForm.css";

function ProjectForm({ onAddProject, onClose }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: uuidv4(),
      title,
      todos: [], // Start with empty todos array
    };
    onAddProject(newProject);
    setTitle("");
    onClose();
  };

  return (
    <form className="projectForm" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
