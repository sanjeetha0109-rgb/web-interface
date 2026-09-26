import { useParams, Link } from "react-router-dom";

export default function ReportCard() {
  const { id } = useParams();

  const data = [
    ["Sanjeetha M", 85, 78, 90, 88, 75],
    ["Rahul Kumar", 72, 80, 76, 82, 70],
    ["Priya S", 88, 85, 91, 87, 80]
  ];

  const s = data[id];
  const total = s.slice(1).reduce((a, b) => a + b, 0);

  return (
    <div className="report">
      <h1>📊 Student Report Card</h1>

      <p><b>Name:</b> {s[0]}</p>
      <p><b>Roll No:</b> 10{id + 1}</p>
      <p><b>Department:</b> B.Tech</p>
      <p><b>Year:</b> II Year</p>

      <table>
        <tbody>
          <tr><th>Subject</th><th>Marks</th></tr>
          {["Data Structures","DBMS","Python","Web Development","Mathematics"]
            .map((x, i) => <tr><td>{x}</td><td>{s[i + 1]}</td></tr>)}
        </tbody>
      </table>

      <h3>Total: {total} / 500</h3>
      <h3>Average: {(total / 5).toFixed(2)}%</h3>
      <h3 className="pass">Result: PASS</h3>

      <Link className="btn" to="/students">← Back</Link>
    </div>
  );
}