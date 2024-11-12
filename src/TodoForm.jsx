import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import PropTypes from "prop-types";
import "./TodoForm.css";

const EMPTY_FORM_STATE = {
  title: "",
  description: "",
  dueDate: "",
  priority: "",
  notes: "",
  isCompleted: false,
};

function TodoForm({ onAddTodo, onClose, projectId }) {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [dueDate, setDueDate] = useState("");
  // const [priority, setPriority] = useState("");
  // const [notes, setNotes] = useState("");
  // const [isCompleted, setIsCompleted] = useState(false);

  const [formState, setFormState] = useState(EMPTY_FORM_STATE);

  // const title = formState.title
  const { title, description, dueDate, priority, notes, isCompleted } =
    formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      ...formState,
      id: uuidv4(),
      // title,
      // // description,
      // dueDate,
      // priority,
      // // notes,
      // isCompleted,
    };
    console.log("TodoForm: submitting", { projectId, newTodo });

    // save the todo item
    onAddTodo(projectId, newTodo);

    // setTitle("");
    // setIsCompleted(false);

    // reset the form back to empty (clear the form)
    setFormState(EMPTY_FORM_STATE);
    onClose();
  };

  function handleChangeFormState(key, newVal) {
    setFormState({ ...formState, [key]: newVal });
  }

  return (
    <div className="todo-form-overlay">
      <form className="todo-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => handleChangeFormState("title", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) =>
              handleChangeFormState("description", e.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) =>
              setFormState({ ...formState, dueDate: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Priority:</label>
          <select
            value={priority}
            onChange={(e) =>
              setFormState((prevState) => ({
                ...prevState,
                priority: e.target.value,
              }))
            }
          >
            <option value="">Select Priority</option>
            <option value="low" className="priority-low">
              Low
            </option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-group">
          <label>Notes:</label>
          <textarea
            value={notes}
            onChange={(e) => handleChangeFormState("notes", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={(e) =>
                handleChangeFormState("isCompleted", e.target.checked)
              }
            />
            Completed
          </label>
        </div>
        <div className="form-buttons">
          <button type="submit">Add ToDo</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TodoForm;
