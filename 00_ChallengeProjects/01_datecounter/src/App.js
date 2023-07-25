import "./App.css"
import { useState } from "react"

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  )
}

function Counter() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  function handleStepChange(e) {
    setStep(Number(e.target.value))
  }

  function handleReset() {
    setCount(0)
    setStep(1)
  }

  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + count)
  return (
    <div>
      <div>
        <br></br>
        <div
          className="buttons"
          style={{ display: "inline-block", margin: "0 10px" }}
        >
          <span>Step Count </span>
          <input
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={handleStepChange}
          />
          <p style={{ display: "inline-block", margin: "0 10px" }}>
            Step: {step}
          </p>

          {/*}
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handlePreviousStep}
          >
            Decrease Step
          </button>
          <p style={{ display: "inline-block", margin: "0 10px" }}>{step}</p>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleNextStep}
          >
            Increase Step
          </button>

  {*/}
        </div>
      </div>
      <br></br>
      <div
        className="buttons"
        style={{ display: "inline-block", margin: "0 10px" }}
      >
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => setCount((c) => c - step)}
        >
          Decrease Count
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          button
          onClick={() => setCount((c) => c + step)}
        >
          Increase Count
        </button>
      </div>
      <br></br>
      <br></br>
      <div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{currentDate.toDateString()}</span>
        </p>

        {count !== 0 || step !== 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
