import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete, onToggle }) {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />{" "}
      </h3>
      <p>
        <span>{task.day ?? ""}</span>
        <span>{task.time}</span>
      </p>
    </div>
  );
}

export default Task;
