import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar picture="rmk2.jpeg" alt="Roderik Kelder" />
      <div className="data">
        <Intro
          name="Roderik Kelder"
          description="Frontend developer. When I am not coding, I like to cook (and eat!), go hiking or learn Korean."
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList className="SkillList" />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img src={props.picture} alt={props.pictureName} className="avatar" />
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill skill="HTML & CSS" emoji="💪" color="blue" />
      <Skill skill="JavaScript" emoji="💪" color="red" />
      <Skill skill="Git & GitHub" emoji="💪" color="orange" />
      <Skill skill="React" emoji="👶" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
