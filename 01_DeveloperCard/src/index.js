import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"

// list of skills
const skills = [
  {
    skill: "HTML & CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Git & GitHub",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#60DAFB",
  },
]

/* 
- loop over this list, display one skill for each object;
- conditionally set an accompanying emoji depending on your level;
*/

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
  )
}

function Avatar(props) {
  return (
    <div>
      <img src={props.picture} alt={props.pictureName} className="avatar" />
    </div>
  )
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  )
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
  )
}

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
