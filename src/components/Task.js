import { FaTimes } from "react-icons/fa";

function formatTimeShow(h_24) {
  let arrTime = h_24.split(":");

  let h = arrTime[0] % 12;
  let m = arrTime[1];

  if (h === 0) h = 12;
  return (h < 10 ? "0" : "") + h + ":" + m + (arrTime[0] < 12 ? "AM" : "PM");
}

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
        {/* <span>{task.day ?? ""}</span> */}
        <span>
          {task.day
            ? new Intl.DateTimeFormat("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              }).format(new Date(task.day))
            : task.day}
        </span>
        <span>{task.day && task.time ? " @ " : ""}</span>
        <span>{task.time !== "" && formatTimeShow(task.time)}</span>
      </p>
    </div>
  );
}

export default Task;
