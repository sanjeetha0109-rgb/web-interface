function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-heading">

        <h1>
          Contact Me
        </h1>

        <div className="heading-line"></div>

      </div>


      <div className="contact-container">

        {/* LEFT CARD */}

        <div className="contact-left">

          <h2>
            Let's Connect
          </h2>

          <p className="contact-description">
            I am always interested in learning, collaborating,
            and discussing technology and new ideas.
          </p>


          <div className="contact-item">

            <div className="contact-icon">
              ✉
            </div>

            <div>
              <h3>
                Email
              </h3>

              <p>
                sanjeetha@example.com
              </p>
            </div>

          </div>


          <div className="contact-item">

            <div className="contact-icon">
              📍
            </div>

            <div>
              <h3>
                Location
              </h3>

              <p>
                Tamil Nadu, India
              </p>
            </div>

          </div>


          <div className="contact-item">

            <div className="contact-icon">
              🎓
            </div>

            <div>
              <h3>
                Department
              </h3>

              <p>
                B.Tech AIDS
              </p>
            </div>

          </div>

        </div>


        {/* RIGHT FORM */}

        <div className="contact-right">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
          ></textarea>

          <button>
            Send Message
          </button>

        </div>

      </div>

    </section>
  );
}

export default Contact;