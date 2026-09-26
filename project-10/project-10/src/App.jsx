import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import ReportCard from "./pages/ReportCard";

function App() {
  return (
    <>
      <nav>
        <h2>🎓 Student Report Card</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/students">Students</Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/report/:id" element={<ReportCard />} />
        </Routes>
      </main>

      <footer>© 2026 Student Report Card System</footer>
    </>
  );
}

export default App;