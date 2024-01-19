import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import reportWebVitals from './reportWebVitals';

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Tailwind and Bootstrap",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#A4D8DC",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    // color: "#E84F33",
    color: "#E6715D",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "React Native",
    level: "beginner",
    color: "#EE82EE",
  },
  {
    skill: "JAVA",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="creed.jpg" alt="Creed" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Frank Obika</h1>
      <p>
        FrontEnd web developer and teacher. When not coding or teaching, I like
        to play board games, watch movies, travel and go on vacations.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}

      {/* <Skill skill="HTML+CSS" emoji="💪" color="gray" />
      <Skill skill="Javacript" emoji="💪" color="orangered" />
      <Skill skill="Git and GitHub" emoji="👍" color="green" />
      <Skill skill="Web Design" emoji="💪" color="blue" />
      <Skill skill="Tailwind and Bootstrap" emoji="👍" color="yellow" />
      <Skill skill="React" emoji="💪" color="violet" /> */}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
