import React from "react";
import "./Hobbies.css";

const hobbies = [
  {
    id: 1,
    icon: "💃",
    title: "Dancing",
    description:
      "Dancing makes me happy and energetic. I love expressing myself through different dance forms.",
  },
  {
    id: 2,
    icon: "🎬",
    title: "Watching Movies",
    description:
      "I enjoy watching movies of different genres and exploring interesting stories and characters.",
  },
  {
    id: 3,
    icon: "🍳",
    title: "Cooking",
    description:
      "I love cooking new recipes and experimenting with different flavors and cuisines.",
  },
  {
    id: 4,
    icon: "📚",
    title: "Reading Books",
    description:
      "Reading books improves my knowledge and imagination and helps me discover new ideas.",
  },
  {
    id: 5,
    icon: "✈️",
    title: "Traveling",
    description:
      "I love exploring new places, experiencing different cultures, and creating beautiful memories.",
  },
  {
    id: 6,
    icon: "🎵",
    title: "Listening to Music",
    description:
      "Music refreshes my mind and keeps me positive. I enjoy listening to different types of songs.",
  },
];

function Hobbies() {
  return (
    <section className="hobbies-section">

      {/* Header */}
      <div className="hobbies-header">
        <span className="passion-badge">
          💗 My Passion
        </span>

        <h1>
          My <span>Hobbies</span>
        </h1>

        <p>
          Little things I love to do in my free time ✨
        </p>
      </div>

      {/* Hobby Cards */}
      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <div
            className="hobby-card"
            key={hobby.id}
            style={{
              animationDelay: `${index * 0.12}s`,
            }}
          >
            <div className="icon-circle">
              {hobby.icon}
            </div>

            <div className="hobby-content">
              <h2>{hobby.title}</h2>

              <div className="small-line"></div>

              <p>{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="hobbies-footer">
        💜 Hobbies make life beautiful 💜
      </div>

    </section>
  );
}

export default Hobbies;