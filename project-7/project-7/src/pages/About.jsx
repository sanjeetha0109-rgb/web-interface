function About() {
  return (
    <section className="about-page">

      <div className="about-heading">

        <p>
          GET TO KNOW ME
        </p>

        <h1>
          About Me
        </h1>

        <div className="heading-line"></div>

      </div>


      <div className="about-container">

        {/* LEFT */}

        <div className="about-left">

          <h2>
            I'm Sanjeetha M
          </h2>

          <p>
            I am a Computer Science Engineering student (B.Tech AIDS)
            who is passionate about technology and software development.
            I am currently developing my programming and problem-solving
            skills, while exploring Artificial Intelligence, Data Science,
            and modern web technologies.
          </p>

          <p>
            My goal is to become a skilled and innovative software engineer
            and work on real-world projects.
          </p>

        </div>


        {/* RIGHT */}

        <div className="about-right">

          <div className="about-box">

            <div className="about-icon">
              🎓
            </div>

            <div>
              <h3>
                Education
              </h3>

              <p>
                B.Tech Artificial Intelligence & Data Science (AIDS)
              </p>
            </div>

          </div>


          <div className="about-box">

            <div className="about-icon">
              💻
            </div>

            <div>
              <h3>
                Interests
              </h3>

              <p>
                AI • Data Science • Web Development • Problem Solving
              </p>
            </div>

          </div>


          <div className="about-box">

            <div className="about-icon">
              ⭐
            </div>

            <div>
              <h3>
                Goal
              </h3>

              <p>
                Become a skilled software engineer and build impactful projects.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;