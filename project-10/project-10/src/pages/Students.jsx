import { Link } from "react-router-dom";

export default function Students() {
  const students = [
    ["Sanjeetha M", "101", "B.Tech AIDS"],
    ["Rahul Kumar", "102", "B.Tech CSE"],
    ["Priya S", "103", "B.Tech IT"]
  ];

  return (
    <div>
      <h1>👩‍🎓 Students List</h1>
      <p>Select a student to view their report card.</p>

      <section>
        {students.map((s, i) => (
          <div className="card" key={i}>
            <h2>👤 {s[0]}</h2>
            <p><b>Roll No:</b> {s[1]}</p>
            <p><b>Department:</b> {s[2]}</p>
            <p><b>Year:</b> II Year</p>
            <Link className="btn" to={`/report/${i}`}>View Report</Link>
          </div>
        ))}
      </section>
    </div>
  );
}