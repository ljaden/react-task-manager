import { useState } from "react";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    // console.log('form',text,day,reminder)

    if (!text) {
      alert("Task field cannot be empty!");
      return;
    }

    onAdd({ text, day, time, reminder });

    setText("");
    setDay("");
    setTime("");
    setReminder(false);
  }

  return (
    <form action="" className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          maxLength={25}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.target.checked)}
          checked={reminder}
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
}

export default AddTask;
