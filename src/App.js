// import './App.css';
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [form, setForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shooping",
      day: "Feb 5th @ 2:30PM",
      reminder: false,
    },
  ]);

  // Delete Task
  function deleteTask(id) {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder
  function toggleReminder(id) {
    console.log(id, "toggleReminder");

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }

  // Add new Task
  function addTask(task) {
    console.log("addTask", task.text, task.day, task.reminder);

    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);

    console.log(tasks);
  }

  // Toggle Form
  function toggleForm() {
    setForm(!form);
    console.log(form);
  }

  return (
    <div className="container">
      <Header toggleForm={toggleForm} displayForm={form} />

      {form && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Empty Task"
      )}
    </div>
  );
}

export default App;
