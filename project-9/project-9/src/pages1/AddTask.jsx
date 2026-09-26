import { useState } from "react";

function AddTask() {
  const [task, setTask] = useState("");

  function submitTask(e) {
    e.preventDefault();

    if (task) {
      alert("Task Added! ✅");
      setTask("");
    }
  }

  return (
    <div className="page">
      <h2>Add a New Task</h2>
      <p>Create something you want to finish today.</p>

      <form onSubmit={submitTask} className="task-form">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <select>
          <option>High Priority</option>
          <option>Medium Priority</option>
          <option>Low Priority</option>
        </select>

        <button>Add Task +</button>
      </form>
    </div>
  );
}

export default AddTask;