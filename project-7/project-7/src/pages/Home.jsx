import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">

      <div className="home-content">

        <p className="welcome">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm <span>Sanjeetha M</span>
        </h1>

        <h2>
          Computer Science Engineering Student
        </h2>

        <p className="home-description">
          I am a passionate B.Tech AIDS student interested in Artificial
          Intelligence, Data Science, and Software Development. I enjoy
          learning new technologies and building useful projects.
        </p>

        <div className="home-buttons">

          <Link to="/about" className="skill-btn">
            My Skills
          </Link>

          <Link to="/about" className="about-btn">
            About Me
          </Link>

        </div>

      </div>


      <div className="profile-card">

        <div className="profile-circle">
          SM
        </div>

        <h3>
          Sanjeetha M
        </h3>

        <p>
          B.Tech AIDS
        </p>

      </div>

    </section>
  );
}

export default Home;