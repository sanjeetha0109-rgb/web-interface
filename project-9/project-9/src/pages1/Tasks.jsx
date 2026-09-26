import { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([
    "Complete Web Technology",
    "Practice Python",
    "Study DBMS"
  ]);

  function complete(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="page">
      <h2>Today's Tasks</h2>
      <p>Complete your tasks and stay productive.</p>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="task-item" key={index}>
            <span>○ {task}</span>
            <button onClick={() => complete(index)}>Done</button>
          </div>
        ))}
      </div>

      <div className="task-count">
        <b>{tasks.length}</b>
        <span> tasks remaining</span>
      </div>
    </div>
  );
}

export default Tasks;