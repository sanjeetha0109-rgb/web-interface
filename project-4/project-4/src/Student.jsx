import React from "react";
import "./Student.css";

function StudentCard({
  name,
  cgpa,
  attendance,
  semester,
  year,
  place,
  subjects
}) {
  return (
    <div className="student-card">
      <div className="student-avatar">
        {name.charAt(0)}
      </div>

      <div className="student-info">
        <h2
          style={{
            color: "#6c5ce7",
            fontSize: "28px",
            marginBottom: "8px"
          }}
        >
          {name}
        </h2>

        <p className="student-role">B.Tech Student</p>

        <div className="student-details">
          <div className="detail-box">
            <span>📊 CGPA</span>
            <strong style={{ color: "#00b894", fontSize: "22px" }}>
              {cgpa}
            </strong>
          </div>

          <div className="detail-box">
            <span>📅 Semester</span>
            <strong>{semester}</strong>
          </div>

          <div className="detail-box">
            <span>🎓 Year</span>
            <strong>{year}</strong>
          </div>

          <div className="detail-box">
            <span>📍 Place</span>
            <strong>{place}</strong>
          </div>

          <div className="detail-box">
            <span>📚 Subjects</span>
            <strong>{subjects.length}</strong>
          </div>
        </div>

        <div className="attendance-section">
          <div className="attendance-header">
            <span>Attendance</span>

            <strong
              style={{
                color: attendance >= 75 ? "#00b894" : "#e17055",
                fontSize: "20px"
              }}
            >
              {attendance}%
            </strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${attendance}%`,
                backgroundColor:
                  attendance >= 75 ? "#00b894" : "#e17055"
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubjectList({ subjects }) {
  return (
    <div className="subjects-card">
      <div className="section-title">
        <span className="icon">📚</span>

        <div>
          <h2>My Subjects</h2>
          <p>
            Total number of subjects: <strong>{subjects.length}</strong>
          </p>
        </div>
      </div>

      <ul className="subject-list">
        {subjects.map((subject, index) => (
          <li key={index}>
            <span className="subject-number">{index + 1}</span>
            <span>{subject}</span>
            <span className="subject-arrow">→</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Student() {
  const subjects = [
    "Data Structures",
    "Data Science",
    "Database Management System",
    "Web Development",
    "Mathematics",
    "Artificial Intelligence"
  ];

  const student = {
    name: "Sanjeetha",
    cgpa: 8.7,
    semester: 4,
    year: 2,
    place: "Chennai",
    attendance: 82
  };

  return (
    <div className="dashboard">

      {/* Header */}
      <header className="header">
        <div>
          <h1>🎓 Student Dashboard</h1>
          <p>Academic Performance & Eligibility Portal</p>
        </div>

        <div className="college-badge">
          PDKVCET
        </div>
      </header>

      {/* College Name */}
      <div className="college-name">
        <h2>
          Prince Dr. K. Vasudevan College of Engineering and Technology
        </h2>
        <p>Student Academic Management System</p>
      </div>

      <main className="main-content">

        {/* Student Card */}
        <StudentCard
          name={student.name}
          cgpa={student.cgpa}
          attendance={student.attendance}
          semester={student.semester}
          year={student.year}
          place={student.place}
          subjects={subjects}
        />

        {/* Subjects */}
        <SubjectList subjects={subjects} />

        {/* Eligibility */}
        <div className="eligibility-container">

          <div
            className={
              student.attendance >= 75
                ? "eligibility-card eligible"
                : "eligibility-card not-eligible"
            }
          >
            <div className="eligibility-icon">
              {student.attendance >= 75 ? "✓" : "✕"}
            </div>

            <div>
              <h3>Attendance Eligibility</h3>

              {student.attendance >= 75 ? (
                <p>Eligible for semester examination</p>
              ) : (
                <p>Not eligible due to low attendance</p>
              )}
            </div>
          </div>

          <div
            className={
              student.cgpa >= 7.5 &&
              student.attendance >= 75
                ? "eligibility-card eligible"
                : "eligibility-card not-eligible"
            }
          >
            <div className="eligibility-icon">
              {student.cgpa >= 7.5 &&
              student.attendance >= 75
                ? "✓"
                : "✕"}
            </div>

            <div>
              <h3>Placement Eligibility</h3>

              {student.cgpa >= 7.5 &&
              student.attendance >= 75 ? (
                <p>Eligible for placement opportunities</p>
              ) : (
                <p>Not eligible for placement</p>
              )}
            </div>
          </div>

        </div>

        {/* Academic Summary */}
        <div className="summary-card">
          <h2>📈 Academic Summary</h2>

          <div className="summary-grid">

            <div>
              <span>Semester</span>
              <strong>Semester {student.semester}</strong>
            </div>

            <div>
              <span>Academic Year</span>
              <strong>{student.year}nd Year</strong>
            </div>

            <div>
              <span>Total Subjects</span>
              <strong>{subjects.length}</strong>
            </div>

            <div>
              <span>Current CGPA</span>
              <strong>{student.cgpa}</strong>
            </div>

          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2026 Prince Dr. K. Vasudevan College of Engineering and Technology
        </p>

        <span>
          Student Dashboard | All Rights Reserved
        </span>
      </footer>

    </div>
  );
}

export default Student;