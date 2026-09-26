import { useState } from "react";
import "./Attendance.css";

function Attendance() {
  const [members, setMembers] = useState([
    { id: 1, name: "Arun", present: true },
    { id: 2, name: "Priya", present: true },
    { id: 3, name: "Rahul", present: false },
    { id: 4, name: "Divya", present: true },
    { id: 5, name: "Karthik", present: false },
    { id: 6, name: "Sneha", present: true },
    { id: 7, name: "Vijay", present: true },
    { id: 8, name: "Anjali", present: false },
    { id: 9, name: "Surya", present: true },
    { id: 10, name: "Keerthi", present: true },
    { id: 11, name: "Ajay", present: false },
    { id: 12, name: "Meena", present: true },
    { id: 13, name: "Ravi", present: false },
    { id: 14, name: "Pooja", present: true },
    { id: 15, name: "Dinesh", present: true },
    { id: 16, name: "Harini", present: false },
    { id: 17, name: "Sanjay", present: true },
    { id: 18, name: "Nandhini", present: false },
    { id: 19, name: "Manoj", present: true },
    { id: 20, name: "Lakshmi", present: true }
  ]);

  const toggleAttendance = (id) => {
    setMembers(
      members.map((member) =>
        member.id === id
          ? { ...member, present: !member.present }
          : member
      )
    );
  };

  const presentCount = members.filter(
    (member) => member.present
  ).length;

  const absentCount = members.filter(
    (member) => !member.present
  ).length;

  return (
    <div className="attendance-page">

      <div className="header">
        <h1>📋 Attendance Tracker</h1>
        <p>Manage today's attendance easily</p>
      </div>

      <div className="summary">
        <div className="summary-card total">
          <h3>Total Members</h3>
          <h2>{members.length}</h2>
        </div>

        <div className="summary-card present">
          <h3>Present</h3>
          <h2>{presentCount}</h2>
        </div>

        <div className="summary-card absent">
          <h3>Absent</h3>
          <h2>{absentCount}</h2>
        </div>
      </div>

      <div className="attendance-container">
        <h2>👥 Member Attendance</h2>

        {members.map((member) => (
          <div className="member-card" key={member.id}>

            <div className="member-info">
              <div className="number">
                {member.id}
              </div>

              <div>
                <h3>{member.name}</h3>

                <p className={
                  member.present ? "present-text" : "absent-text"
                }>
                  {member.present ? "Present" : "Absent"}
                </p>
              </div>
            </div>

            <button
              className={
                member.present ? "absent-btn" : "present-btn"
              }
              onClick={() => toggleAttendance(member.id)}
            >
              {member.present ? "Mark Absent" : "Mark Present"}
            </button>

          </div>
        ))}
      </div>

      <div className="result-box">
        <h2>📊 Attendance Result</h2>

        <div className="result-details">
          <div>
            <span>Present Count</span>
            <strong>{presentCount}</strong>
          </div>

          <div>
            <span>Absent Count</span>
            <strong>{absentCount}</strong>
          </div>
        </div>

        <p className="message">
          {presentCount === members.length
            ? "🎉 Everyone is Present!"
            : presentCount > absentCount
            ? "👍 Most members are Present"
            : "⚠️ More members are Absent"}
        </p>
      </div>

    </div>
  );
}

export default Attendance;