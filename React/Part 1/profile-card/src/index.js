import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML",
    level: "intermediate",
    color: "red",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "yellow",
  },
  {
    skill: "CSS",
    level: "beginer",
    color: "blue",
  },
];

function Image() {
  return <img className="profile-image" src="./image.png" alt="img" />;
}

function AboutSection() {
  return (
    <section>
      <h2>Maksym Korniiko</h2>
      <p>
        Front-end web-developer. Learning React. Already learned HTML, CSS,
        JavaScript.
      </p>
      {skills.map((badge) => {
        return (
          <Badge color={badge.color} name={badge.skill} level={badge.level} />
        );
      })}
    </section>
  );
}

function Badge({ color, name, level }) {
  return (
    <div className="badge" style={{ background: color }}>
      <span>
        {" "}
        {`${name} ${
          level === "intermediate" ? "👍" : level === "beginer" ? "😏 " : ""
        }`}
      </span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Image />
      <AboutSection />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
