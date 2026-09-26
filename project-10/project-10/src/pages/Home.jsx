import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>🎓 Student Report Card</h1>
      <p>Welcome to the Student Report Card Management System.</p>
      <p>View students and check their academic performance.</p>
      <Link className="btn" to="/students">View Students</Link>

      <section>
        <div>👩‍🎓<h3>Students</h3><p>View student details.</p></div>
        <div>📊<h3>Reports</h3><p>Check marks and results.</p></div>
        <div>📚<h3>Performance</h3><p>View academic performance.</p></div>
      </section>
    </div>
  );
}