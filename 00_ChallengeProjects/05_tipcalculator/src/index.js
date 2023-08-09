import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import Amount from "./Amount.js"
import YourService from "./YourService.js"
import FriendService from "./FriendService.js"
import Total from "./Total.js"
import Reset from "./Reset.js"
import { useState } from "react"

function App() {
  const [totalAmount, setTotalAmount] = useState("")
  const [tipPercentageYourService, setTipPercentageYourService] = useState(0)
  const [tipPercentageFriendService, setTipPercentageFriendService] =
    useState(0)

  const handleAmountChange = (newAmount) => {
    setTotalAmount(newAmount)
  }

  const handleYourTipChange = (newTipPercentage) => {
    setTipPercentageYourService(newTipPercentage)
  }

  const handleFriendTipChange = (newTipPercentageFriend) => {
    setTipPercentageFriendService(newTipPercentageFriend)
  }

  const tip =
    totalAmount *
    ((tipPercentageYourService + tipPercentageFriendService) / 2 / 100)

  function handleReset() {
    setTotalAmount("")
    setTipPercentageYourService(0)
    setTipPercentageFriendService(0)
  }

  return (
    <div className="app">
      <div className="column">
        <Amount
          totalAmount={totalAmount}
          handleAmountChange={handleAmountChange}
        />
        <YourService
          tipPercentageYourService={tipPercentageYourService}
          onTipChange={handleYourTipChange}
        />
        <FriendService
          tipPercentageFriendService={tipPercentageFriendService}
          onTipChange1={handleFriendTipChange}
        />
        {totalAmount > 0 && (
          <>
            <Total totalAmount={totalAmount} tip={tip} />
            <Reset onReset={handleReset} />{" "}
          </>
        )}
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
