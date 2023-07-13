const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Start your dream job! 🤑",
]

export default function App() {
  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div className="active">2</div>
        <div className="active">3</div>
      </div>

      <p className="message">Hello</p>

      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Next
        </button>
      </div>
    </div>
  )
}
