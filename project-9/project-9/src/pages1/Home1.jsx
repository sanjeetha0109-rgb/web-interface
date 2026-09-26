import { Link } from "react-router-dom";

function Home1() {
  return (
    <div className="home-page">
      <div className="welcome">
        <p className="small">WELCOME BACK 👋</p>
        <h2>Manage your tasks.<br />Achieve your goals.</h2>

        <p>
          Keep your daily activities organized and
          complete your work on time.
        </p>

        <Link to="/add" className="start">Get Started →</Link>
      </div>

      <div className="home-cards">
        <div>
          <h3>📌 Plan</h3>
          <p>Create tasks for your day.</p>
        </div>

        <div>
          <h3>⚡ Focus</h3>
          <p>Concentrate on important work.</p>
        </div>

        <div>
          <h3>🏆 Finish</h3>
          <p>Complete your goals.</p>
        </div>
      </div>
    </div>
  );
}

export default Home1;